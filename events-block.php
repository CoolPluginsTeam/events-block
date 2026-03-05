<?php
/**
 * Plugin Name: Events Block
 * Description: Events Gutenberg Block to Create Events Grid In Block Editor.
 * Author: Cool Plugins
 * Author URI: https://coolplugins.net/
 * Version: 1.0.6
 * License: GPLv2 or later
 * Text Domain: events-block
 */
defined( 'ABSPATH' ) || exit;
define( 'EVENTS_BLOCK_VERSION', '1.0.6' );
define( 'EVENTS_BLOCK_FILE', __FILE__ );
define( 'EVENTS_BLOCK_PATH', plugin_dir_path( __FILE__ ) );
define( 'EVENTS_BLOCK_URL', plugin_dir_url( __FILE__ ) );
define( 'EVENTS_BLOCK_FEEDBACK_API', 'https://feedback.coolplugins.net/' );



final class EVTB_Events_Block {
	private static $instance = null;
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) self::$instance = new self();
		return self::$instance;
	}
	private function __construct() {

		register_activation_hook( EVENTS_BLOCK_FILE, array( $this, 'evtb_plugin_activate' ) );
		add_action( 'init', array( $this, 'init' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'frontend_assets' ) );
		add_action( 'plugins_loaded', array( $this, 'evtb_check_event_calender_installed' ) );
		$this->evtb_require_files();
	}
	/**
	 * Plugin Activation Hook
	 * Saves plugin version and install dates
	 */
	public function evtb_plugin_activate() {
		
		update_option( 'evtb_version', EVENTS_BLOCK_VERSION );
		update_option( 'evtb_activation_time', gmdate( 'Y-m-d h:i:s' ) );

		if (!get_option( 'evtb_initial_save_version' ) ) {
			add_option( 'evtb_initial_save_version', EVENTS_BLOCK_VERSION );
		}
		if(!get_option( 'evtb_install_date' ) ) {
			add_option( 'evtb_install_date', gmdate('Y-m-d h:i:s') );
		}
		if(!get_option( 'evtb_ratingDiv' ) ) {
			add_option( 'evtb_ratingDiv', 'no' );
		}
	}

	public function init() {
		$asset = file_exists( EVENTS_BLOCK_PATH . 'build/index.asset.php' ) ? require EVENTS_BLOCK_PATH . 'build/index.asset.php' : array( 'dependencies' => array(), 'version' => EVENTS_BLOCK_VERSION );
		wp_register_script( 'evtb-events-blocks', EVENTS_BLOCK_URL . 'build/index.js', $asset['dependencies'], $asset['version'], true );
		wp_localize_script( 'evtb-events-blocks', 'evtbPluginData', array( 'pluginUrl' => EVENTS_BLOCK_URL, 'images' => array( 'crazyDJ' => EVENTS_BLOCK_URL . 'assets/images/crazy-DJ-experience-santa-cruz.webp', 'rockBand' => EVENTS_BLOCK_URL . 'assets/images/cute-girls-rock-band-performance.webp', 'foodDistribution' => EVENTS_BLOCK_URL . 'assets/images/free-food-distribution-at-mumbai.webp' ) ) );
		wp_register_style( 'evtb-events-editor', EVENTS_BLOCK_URL . 'editor.css', array(), EVENTS_BLOCK_VERSION );
		wp_register_style( 'evtb-events-style', EVENTS_BLOCK_URL . 'style.css', array(), EVENTS_BLOCK_VERSION );
		if ( is_dir( EVENTS_BLOCK_PATH . 'blocks/' ) ) {
			foreach ( glob( EVENTS_BLOCK_PATH . 'blocks/*/block.json' ) as $block ) register_block_type( dirname( $block ) );
		}
	}
	public function editor_assets() {
		wp_enqueue_style( 'evtb-icons', EVENTS_BLOCK_URL . 'assets/css/evtb-icons.css', array(), EVENTS_BLOCK_VERSION );
	}
	public function frontend_assets() {
		wp_enqueue_style( 'evtb-icons', EVENTS_BLOCK_URL . 'assets/css/evtb-icons.css', array(), EVENTS_BLOCK_VERSION );
		wp_enqueue_script( 'evtb-frontend', EVENTS_BLOCK_URL . 'assets/js/frontend.js', array(), EVENTS_BLOCK_VERSION, true );
	}

	public function evtb_check_event_calender_installed(){
		if (is_admin()) {
				require_once EVENTS_BLOCK_PATH . 'admin/feedback/admin-feedback-form.php';
			}
		if(!class_exists('CPFM_Feedback_Notice')){
				require_once EVENTS_BLOCK_PATH . 'admin/cpfm-feedback/cpfm-feedback-notice.php';
			}
		
		add_action('cpfm_register_notice', function () {
			
				if (!class_exists('CPFM_Feedback_Notice') || !current_user_can('manage_options')) {
					return;
				}
				$notice = [
					'title' => __('Events Addons By Cool Plugins', 'events-block'),
					'message' => __('Help us make this plugin more compatible with your site by sharing non-sensitive site data.', 'events-block'),
					'pages' => ['cool-plugins-events-addon', 'events-block'],
					'always_show_on' => ['cool-plugins-events-addon', 'events-block'], // This enables auto-show
					'plugin_name'=>'events-block',
					
				];
	
				CPFM_Feedback_Notice::cpfm_register_notice('cool_events', $notice);
	
					if (!isset($GLOBALS['cool_plugins_feedback'])) {
						$GLOBALS['cool_plugins_feedback'] = [];//phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
					}
				
					$GLOBALS['cool_plugins_feedback']['cool_events'][] = $notice;//phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
		   
			});

		add_action('cpfm_after_opt_in_evtb', function($category) {
	
				if ($category === 'cool_events') {
					EVTB_cronjob::evtb_send_data();
				}
			});
	}

	public function evtb_require_files() {
			if ( is_admin() ) {
				require_once EVENTS_BLOCK_PATH . 'admin/feedback-notice/evtb-feedback-notice.php';
				new evtbFeedbackNotice();
			}
		}
}
EVTB_Events_Block::get_instance();
