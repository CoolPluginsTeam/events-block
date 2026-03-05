<?php
if (!defined('ABSPATH')) {
    exit();
}

if (!class_exists('EVTB_cronjob')) {
    class EVTB_cronjob
    {

        public function __construct() {
          // Register cron jobs
            add_filter('cron_schedules', array($this, 'evtb_cron_schedules'));
            add_action('evtb_extra_data_update', array($this, 'evtb_cron_extra_data_autoupdater'));
        }
        
        function evtb_cron_extra_data_autoupdater() {
                if (class_exists('EVTB_cronjob')) {
                    EVTB_cronjob::evtb_send_data();
                }
        }
           
       static public function evtb_send_data() {
            $feedback_url = EVENTS_BLOCK_FEEDBACK_API . 'wp-json/coolplugins-feedback/v1/site';
            require_once EVENTS_BLOCK_PATH . 'admin/feedback/admin-feedback-form.php';

            if (!defined('EVENTS_BLOCK_PATH')  || !class_exists('\EVTB\feedback\evtb_feedback') ) {
                return;
            }
            
            $extra_data         = new \EVTB\feedback\evtb_feedback();
            $extra_data_details = $extra_data->cpfm_get_user_info();
            
            $server_info    = $extra_data_details['server_info'];
            $extra_details  = $extra_data_details['extra_details'];
            $site_url       = get_site_url();
            $install_date   = get_option('evtb_install_date');
            $uni_id         = '27';
            $site_id        = $site_url . '-' . $install_date . '-' . $uni_id;
            $initial_version = get_option('evtb_initial_save_version');
            $initial_version = is_string($initial_version) ? sanitize_text_field($initial_version) : 'N/A';
            $plugin_version = defined('EVENTS_BLOCK_VERSION') ? EVENTS_BLOCK_VERSION : 'N/A';
            $admin_email    = sanitize_email(get_option('admin_email') ?: 'N/A');
            
            $post_data = array(

                'site_id'           => md5($site_id),
                'plugin_version'    => $plugin_version,
                'plugin_name'       => 'Events Block',
                'plugin_initial'    => $initial_version,
                'email'             => $admin_email,
                'site_url'          => esc_url_raw($site_url),
                'server_info'       => $server_info,
                'extra_details'     => $extra_details,
            );
            
            $response = wp_remote_post($feedback_url, array(

                'method'    => 'POST',
                'timeout'   => 30,
                'headers'   => array(
                    'Content-Type' => 'application/json',
                ),
                'body'      => wp_json_encode($post_data),
            ));
            
            if (is_wp_error($response)) {
                return;
            }
            
            $response_body  = wp_remote_retrieve_body($response);
            $decoded        = json_decode($response_body, true);
            
            if (!wp_next_scheduled('evtb_extra_data_update')) {

                wp_schedule_event(time(), 'every_30_days', 'evtb_extra_data_update');
            }
        }
          
        /**
         * Cron status schedule(s).
         */
        public function evtb_cron_schedules($schedules)
        {
            // 30days schedule for update information
            if (!isset($schedules['every_30_days'])) {

                $schedules['every_30_days'] = array(
                    'interval' => 30 * 24 * 60 * 60, // 2,592,000 seconds
                    'display'  => __('Once every 30 days', 'countdown-for-the-events-calendar'),
                );
            }

            return $schedules;
        }

    }

    $cron_init = new EVTB_cronjob();//phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
}
