/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/event-date-badge/block.json"
/*!********************************************!*\
  !*** ./blocks/event-date-badge/block.json ***!
  \********************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"evtb/event-date-badge","version":"1.0.0","title":"Event Date Badge","category":"widgets","icon":"clock","description":"Display event date in a styled badge.","keywords":["date","event","event date"],"textdomain":"events-block","parent":["evtb/event-item"],"attributes":{"evtbBadgeId":{"type":"string","default":""},"eventDate":{"type":"string","default":""},"eventStartTime":{"type":"string","default":"09:00"},"eventEndTime":{"type":"string","default":"17:00"},"isDateSet":{"type":"boolean","default":false},"isTimeSet":{"type":"boolean","default":false},"dateBadgeBackgroundColor":{"type":"string","default":"#2667FF"},"dateBadgeTextColor":{"type":"string","default":"#ffffff"},"borderBadgeColor":{"type":"string","default":"#00000040"},"weekdayColor":{"type":"string","default":"#000000"},"hideYear":{"type":"boolean","default":true}},"usesContext":["evtb/eventDate","evtb/hideYear"],"supports":{"html":false,"reusable":false,"color":{"background":true,"text":true}},"editorScript":"evtb-events-blocks","editorStyle":"evtb-events-editor","style":"evtb-events-style","render":"file:./render.php"}');

/***/ },

/***/ "./blocks/event-item/block.json"
/*!**************************************!*\
  !*** ./blocks/event-item/block.json ***!
  \**************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"evtb/event-item","version":"1.0.0","title":"Event Item","category":"widgets","icon":"plus","description":"Individual event card with details.","keywords":["event","card","item"],"textdomain":"events-block","parent":["evtb/events-grid"],"attributes":{"evtbBlockId":{"type":"string","default":""},"eventImage":{"type":"string","default":""},"eventImageAlt":{"type":"string","default":""},"eventDate":{"type":"string","default":""},"eventStartTime":{"type":"string","default":"09:00"},"eventEndTime":{"type":"string","default":"17:00"},"detailsBackgroundColor":{"type":"string","default":"#ffffff"},"isDefault":{"type":"boolean","default":false},"hasImage":{"type":"boolean","default":false},"mediaBlock":{"type":"boolean","default":false},"contentPopulated":{"type":"boolean","default":false},"hideYear":{"type":"boolean","default":true}},"providesContext":{"evtb/eventDate":"eventDate","evtb/eventStartTime":"eventStartTime","evtb/eventEndTime":"eventEndTime","evtb/hideYear":"hideYear"},"usesContext":["evtb/hidePastEvents","evtb/hideYear"],"supports":{"html":false,"reusable":false,"color":{"background":true,"text":false}},"editorScript":"evtb-events-blocks","editorStyle":"evtb-events-editor","style":"evtb-events-style","render":"file:./render.php"}');

/***/ },

/***/ "./blocks/events-grid/block.json"
/*!***************************************!*\
  !*** ./blocks/events-grid/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"evtb/events-grid","version":"1.0.0","title":"Events Block","category":"widgets","icon":"grid-view","description":"Display multiple events in a responsive grid layout.","keywords":["event","events block","grid"],"textdomain":"events-block","attributes":{"columns":{"type":"number","default":2},"hideYear":{"type":"boolean","default":true},"hidePastEvents":{"type":"boolean","default":false}},"providesContext":{"evtb/hideYear":"hideYear","evtb/hidePastEvents":"hidePastEvents"},"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"editorScript":"evtb-events-blocks","editorStyle":"evtb-events-editor","style":"evtb-events-style"}');

/***/ },

/***/ "./src/event-date-badge/index.js"
/*!***************************************!*\
  !*** ./src/event-date-badge/index.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/helpers */ "./src/shared/helpers.js");
/* harmony import */ var _blocks_event_date_badge_block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../blocks/event-date-badge/block.json */ "./blocks/event-date-badge/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/**
 * Event Date Badge Block (Child Block)
 * WordPress Block Standard: Import metadata from block.json
 */










// Register Event Date Badge Block using block.json metadata

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_blocks_event_date_badge_block_json__WEBPACK_IMPORTED_MODULE_8__.name, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Event Date Badge', 'events-block'),
  edit: ({
    attributes,
    setAttributes,
    context,
    clientId
  }) => {
    const {
      evtbBadgeId,
      eventDate,
      isDateSet,
      dateBadgeBackgroundColor,
      dateBadgeTextColor,
      borderBadgeColor,
      weekdayColor,
      hideYear
    } = attributes;

    // Generate unique badge ID if not present
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
      if (!evtbBadgeId) {
        const uniqueId = clientId.substring(0, 8);
        setAttributes({
          evtbBadgeId: uniqueId
        });
      }
    }, []);

    // Set current date if eventDate is empty (for new date badges)
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
      if (!eventDate && !context['evtb/eventDate']) {
        setAttributes({
          eventDate: (0,_shared_helpers__WEBPACK_IMPORTED_MODULE_7__.getCurrentDate)()
        });
      }
    }, []);

    // Use parent's date if available
    const parentDate = context['evtb/eventDate'] || eventDate || (0,_shared_helpers__WEBPACK_IMPORTED_MODULE_7__.getCurrentDate)();

    // Get parent block ID
    const parentClientId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
      const {
        getBlockParents,
        getBlock
      } = select('core/block-editor');
      const parentIds = getBlockParents(clientId);
      // Find the evtb/event-item parent
      for (let parentId of parentIds) {
        const parentBlock = getBlock(parentId);
        if (parentBlock && parentBlock.name === 'evtb/event-item') {
          return parentId;
        }
      }
      return null;
    }, [clientId]);

    // Sync parent values to child attributes
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
      if (context['evtb/eventDate'] && context['evtb/eventDate'] !== eventDate) {
        setAttributes({
          eventDate: context['evtb/eventDate']
        });
      }
    }, [context['evtb/eventDate']]);

    // Sync hideYear from global context
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
      if (context['evtb/hideYear'] !== undefined && context['evtb/hideYear'] !== hideYear) {
        setAttributes({
          hideYear: context['evtb/hideYear']
        });
      }
    }, [context['evtb/hideYear']]);

    // Use CSS Variables (Custom Properties) - Most reliable approach!
    // Set colors as CSS variables on the wrapper element
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: `evtb-event-date-badge-container${evtbBadgeId ? ` evtb-badge-${evtbBadgeId}` : ''}`,
      style: {
        '--evtb-badge-bg': dateBadgeBackgroundColor,
        '--evtb-badge-text': dateBadgeTextColor,
        '--evtb-badge-border': borderBadgeColor,
        '--evtb-badge-weekday': weekdayColor
      }
    });

    // Parse date for display
    const parseDate = dateString => {
      if (!dateString) {
        return {
          day: '01',
          month: 'Jan',
          year: '0001',
          weekday: 'MON'
        };
      }
      let year, month, day;

      // Case 1: YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss
      if (/^\d{4}-\d{2}-\d{2}/.test(dateString)) {
        const cleanDate = dateString.split('T')[0];
        [year, month, day] = cleanDate.split('-');
      } else {
        // fallback
        const d = new Date(dateString);
        year = d.getFullYear();
        month = String(d.getMonth() + 1).padStart(2, '0');
        day = String(d.getDate()).padStart(2, '0');
      }

      // SAFE LOCAL DATE (NO UTC SHIFT)
      const date = new Date(Number(year), Number(month) - 1, Number(day));
      return {
        day: String(date.getDate()).padStart(2, '0'),
        month: date.toLocaleString('en-US', {
          month: 'short'
        }),
        year: String(date.getFullYear()),
        weekday: date.toLocaleString('en-US', {
          weekday: 'short'
        }).toUpperCase()
      };
    };
    const dateParts = parseDate(parentDate);

    // Handle date change - update both child and parent
    const handleDateChange = newDate => {
      // Update child attribute and mark as date set by user
      setAttributes({
        eventDate: newDate,
        isDateSet: true
      });

      // Update parent Event Item block's eventDate
      if (parentClientId) {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.dispatch)('core/block-editor').updateBlockAttributes(parentClientId, {
          eventDate: newDate
        });
      }
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          className: "evtb-date-settings",
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Date Settings', 'events-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            style: {
              marginBottom: '15px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("strong", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Event Date', 'events-block')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              style: {
                margin: '10px 0'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Hide Year', 'events-block'),
                checked: hideYear,
                onChange: value => setAttributes({
                  hideYear: value
                }),
                help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toggle to hide or show the year in the date badge', 'events-block'),
                __nextHasNoMarginBottom: true
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DateTimePicker, {
              currentDate: parentDate,
              onChange: handleDateChange,
              is12Hour: true
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Date Colors', 'events-block'),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              style: {
                width: '100%',
                marginTop: '16px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                style: {
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600'
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'events-block')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
                value: dateBadgeBackgroundColor,
                onChange: color => setAttributes({
                  dateBadgeBackgroundColor: color || '#2667FF'
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              style: {
                width: '100%',
                marginTop: '16px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                style: {
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600'
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Color', 'events-block')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
                value: dateBadgeTextColor,
                onChange: color => setAttributes({
                  dateBadgeTextColor: color || '#ffffff'
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              style: {
                width: '100%',
                marginTop: '16px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                style: {
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600'
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Border Color', 'events-block')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
                value: borderBadgeColor,
                onChange: color => setAttributes({
                  borderBadgeColor: color || '#00000040'
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              style: {
                width: '100%',
                marginTop: '16px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                style: {
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600'
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Weekday Color', 'events-block')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
                value: weekdayColor,
                onChange: color => setAttributes({
                  weekdayColor: color || '#000000'
                })
              })]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        ...blockProps,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "evtb-border-badge",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "evtb-event-date-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "evtb-date-day",
              children: dateParts.day
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "evtb-date-month",
              children: dateParts.month
            }), !hideYear && dateParts.year !== '0001' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "evtb-date-year",
              children: dateParts.year
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
          className: "evtb-date-weekday",
          children: dateParts.weekday
        })]
      })]
    });
  },
  save: () => {
    return null;
  }
});

/***/ },

/***/ "./src/event-item/index.js"
/*!*********************************!*\
  !*** ./src/event-item/index.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/helpers */ "./src/shared/helpers.js");
/* harmony import */ var _blocks_event_item_block_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../blocks/event-item/block.json */ "./blocks/event-item/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
/**
 * Event Item Block (Child Block with InnerBlocks)
 * WordPress Block Standard: Import metadata from block.json
 * Includes: Paragraph extension for time settings
 */











// CHILD BLOCK: Event Item using block.json metadata

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_blocks_event_item_block_json__WEBPACK_IMPORTED_MODULE_9__.name, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Event Item', 'events-block'),
  edit: ({
    attributes,
    setAttributes,
    clientId,
    context
  }) => {
    const {
      evtbBlockId,
      eventImage,
      eventImageAlt,
      eventDate,
      eventStartTime,
      eventEndTime,
      detailsBackgroundColor,
      isDefault,
      hasImage,
      mediaBlock,
      contentPopulated,
      hideYear
    } = attributes;

    // Generate unique block ID and set default date if needed - SINGLE useEffect to prevent issues
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
      let updates = {};
      let shouldUpdate = false;

      // Set unique ID if not present
      if (!evtbBlockId) {
        updates.evtbBlockId = clientId.substring(0, 8);
        shouldUpdate = true;
      }

      // Set current date if eventDate is empty (for all events including default ones)
      if (!eventDate) {
        updates.eventDate = (0,_shared_helpers__WEBPACK_IMPORTED_MODULE_8__.getCurrentDate)();
        shouldUpdate = true;
      }

      // Sync hideYear from parent context (events-grid)
      const contextHideYear = context['evtb/hideYear'];
      if (contextHideYear !== undefined && contextHideYear !== hideYear) {
        updates.hideYear = contextHideYear;
        shouldUpdate = true;
      }

      // Only update if there are changes
      if (shouldUpdate) {
        setAttributes(updates);
      }
    }, [evtbBlockId, eventDate, isDefault, clientId, hideYear, context]);

    // Get inner blocks reactively to check for image block
    const hasImageBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
      const blocks = select('core/block-editor').getBlock(clientId)?.innerBlocks || [];

      // Check for direct image block
      const directImage = blocks.find(block => block.name === 'core/image');
      if (directImage) return true;

      // Check inside group wrappers
      const imageGroup = blocks.find(block => block.name === 'core/group' && block.attributes?.className?.includes('evtb-event-image-wrap'));
      if (imageGroup && imageGroup.innerBlocks) {
        const nestedImage = imageGroup.innerBlocks.find(block => block.name === 'core/image');
        if (nestedImage) return true;
      }
      return false;
    }, [clientId]);

    // Inner Block Template Handler - Add/Remove image block
    const innerBlockTemplate = shouldAddImage => {
      if (!shouldAddImage) {
        // REMOVE: Find and remove image block/group
        const currentBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select)('core/block-editor').getBlock(clientId)?.innerBlocks || [];

        // Try to find image group first
        const imageGroupBlock = currentBlocks.find(block => block.name === 'core/group' && block.attributes?.className?.includes('evtb-event-image-wrap'));
        if (imageGroupBlock) {
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/block-editor').removeBlock(imageGroupBlock.clientId);
        } else {
          // Try direct image block
          const directImageBlock = currentBlocks.find(block => block.name === 'core/image');
          if (directImageBlock) {
            (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/block-editor').removeBlock(directImageBlock.clientId);
          }
        }

        // Clear attributes immediately
        setAttributes({
          mediaBlock: false,
          eventImage: '',
          eventImageAlt: '',
          hasImage: false
        });
      } else {
        // ADD: Create new image block
        const insertedBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/group', {
          className: 'evtb-event-image-wrap'
        }, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/image', {
          className: 'evtb-event-image-block'
        })]);
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/block-editor').insertBlocks(insertedBlock, 0, clientId);
        setAttributes({
          mediaBlock: true,
          hasImage: true
        });

        // Auto-select the image block
        setTimeout(() => {
          const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select)('core/block-editor').getBlock(clientId)?.innerBlocks || [];
          const addedGroup = blocks[0];
          if (addedGroup && addedGroup.innerBlocks && addedGroup.innerBlocks[0]) {
            (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/block-editor').selectBlock(addedGroup.innerBlocks[0].clientId);
          }
        }, 50);
      }
    };

    // Check if event is past
    const hidePastEvents = context['evtb/hidePastEvents'];
    let isPast = false;
    if (hidePastEvents && eventDate) {
      try {
        const currentDateTime = new Date();
        let eventDateTime = new Date(eventDate);

        // Add time if available
        if (eventEndTime) {
          const [hours, minutes] = eventEndTime.split(':');
          eventDateTime.setHours(hours, minutes);

          // Handle overnight events (End Time < Start Time)
          if (eventStartTime && eventEndTime < eventStartTime) {
            eventDateTime.setDate(eventDateTime.getDate() + 1);
          }
        } else {
          // End of day if no time
          eventDateTime.setHours(23, 59, 59);
        }
        if (eventDateTime < currentDateTime) {
          isPast = true;
        }
      } catch (e) {
        // Ignore date parse errors
      }
    }
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: `evtb-event-item${evtbBlockId ? ` evtb-block-${evtbBlockId}` : ''}`,
      style: isPast ? {
        opacity: 0.6,
        filter: 'grayscale(1)'
      } : {}
    });

    // Default event data (for first 3 events)
    const defaultEventData = [{
      title: 'Crazy DJ Experience Santa Cruz',
      time: '9:00 AM - 5:00 PM',
      location: 'JW Marriott, Sector 35',
      price: '$25.00'
    }, {
      title: 'Cute Girls Rock Band Performance',
      time: '9:00 AM - 5:00 PM',
      location: 'Club XYZ, Sector 17',
      price: '$20.00'
    }, {
      title: 'Free Food Distribution At Mumbai',
      time: '9:00 AM - 5:00 PM',
      location: 'Food Corp. Mumbai, Ft. Line',
      price: 'No Cost'
    }];

    // Get default data if this is a default event
    const getDefaultContent = () => {
      if (!isDefault) return null;

      // Try to match based on image alt text
      if (eventImageAlt.includes('DJ')) return defaultEventData[0];
      if (eventImageAlt.includes('Rock')) return defaultEventData[1];
      if (eventImageAlt.includes('Food')) return defaultEventData[2];
      return null;
    };
    const defaultContent = getDefaultContent();

    // Format time display
    const formattedTime = `${(0,_shared_helpers__WEBPACK_IMPORTED_MODULE_8__.formatTime12Hour)(eventStartTime)} – ${(0,_shared_helpers__WEBPACK_IMPORTED_MODULE_8__.formatTime12Hour)(eventEndTime)}`;

    // Get dispatch functions for inserting/removing blocks
    const {
      insertBlocks,
      removeBlocks
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core/block-editor');

    // Get current inner blocks
    const currentInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('core/block-editor').getBlock(clientId)?.innerBlocks || [], [clientId]);

    // Auto-populate default content ONLY for default events
    // This runs ONLY when isDefault=true and contentPopulated=false
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
      // Guard: Wait for attributes to be properly initialized
      if (isDefault === undefined || eventImage === undefined) {
        return;
      }

      // Only run for default events that haven't been populated yet
      if (!isDefault || contentPopulated) {
        return;
      }

      // Must have eventImage to populate content
      if (!eventImage) {
        return;
      }

      // Get default content based on event
      const content = getDefaultContent();
      if (!content) {
        return;
      }

      // Wait for innerBlocks to be ready (they might be created by template)
      const timer = setTimeout(() => {
        const currentBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select)('core/block-editor').getBlock(clientId)?.innerBlocks || [];

        // IMPORTANT: Only populate if blocks exist (created by template)
        // This prevents double content - we're just updating existing blocks, not creating new ones
        if (currentBlocks.length > 0 && insertBlocks) {
          // Clear template placeholder blocks
          const blockIds = currentBlocks.map(block => block.clientId);
          removeBlocks(blockIds, false);

          // Format time for display
          const timeDisplay = `${(0,_shared_helpers__WEBPACK_IMPORTED_MODULE_8__.formatTime12Hour)(eventStartTime)} – ${(0,_shared_helpers__WEBPACK_IMPORTED_MODULE_8__.formatTime12Hour)(eventEndTime)}`;

          // Create content blocks with actual default data
          const contentBlocks = [
          // IMAGE GROUP
          (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/group', {
            className: 'evtb-event-image-wrap'
          }, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/image', {
            url: eventImage,
            alt: eventImageAlt,
            className: 'evtb-event-image-block'
          })]),
          // CARD DETAILS GROUP
          (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/group', {
            className: 'evtb-card-details'
          }, [
          // DATE BADGE
          (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('evtb/event-date-badge', {
            eventDate: eventDate,
            isDateSet: true
          }),
          // DETAILS GROUP
          (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/group', {
            className: 'evtb-event-detail'
          }, [
          // TIME
          (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {
            className: 'evtb-event-time',
            content: timeDisplay,
            evtbStartTime: eventStartTime,
            evtbEndTime: eventEndTime,
            evtbIsTimeSet: true
          }),
          // TITLE
          (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/heading', {
            level: 4,
            className: 'evtb-event-title',
            content: content.title
          }),
          // DESCRIPTION (empty, just placeholder)
          (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Event Description', 'events-block'),
            className: 'evtb-event-description'
          }),
          // LOCATION
          (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {
            className: 'evtb-event-location',
            content: content.location
          }),
          // PRICE + READ MORE GROUP
          (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/group', {
            className: 'evtb-price-read-more'
          }, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {
            className: 'evtb-event-price',
            content: content.price
          }), (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/buttons', {}, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/button', {
            text: 'Read More',
            className: 'evtb-event-read-more',
            url: ''
          })])])])])];

          // Insert populated blocks
          try {
            insertBlocks(contentBlocks, 0, clientId, false);

            // Mark as populated to prevent re-running
            setAttributes({
              contentPopulated: true
            });
          } catch (error) {
            console.error('Error populating default content:', error);
          }
        }
      }, 200); // Small delay to ensure template is ready

      return () => clearTimeout(timer);
    }, [isDefault, contentPopulated, eventImage, eventImageAlt, eventDate, eventStartTime, eventEndTime, clientId]);

    // Template: Creates basic structure with placeholders
    // For default events, useEffect will populate actual content
    // For new events, user will fill manually
    const TEMPLATE = [
    // IMAGE GROUP
    ['core/group', {
      className: 'evtb-event-image-wrap'
    }, [['core/image', {
      url: isDefault ? eventImage : '',
      alt: isDefault ? eventImageAlt : '',
      className: 'evtb-event-image-block'
    }]]],
    // CARD DETAILS GROUP
    ['core/group', {
      className: 'evtb-card-details'
    }, [
    // DATE BADGE
    ['evtb/event-date-badge', {
      eventDate: eventDate || (0,_shared_helpers__WEBPACK_IMPORTED_MODULE_8__.getCurrentDate)(),
      isDateSet: !!eventDate
    }],
    // DETAILS GROUP
    ['core/group', {
      className: 'evtb-event-detail'
    }, [
    // TIME
    ['core/paragraph', {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('9:00 AM – 5:00 PM', 'events-block'),
      className: 'evtb-event-time',
      evtbStartTime: eventStartTime,
      evtbEndTime: eventEndTime,
      evtbIsTimeSet: false
    }],
    // TITLE
    ['core/heading', {
      level: 4,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Event Title', 'events-block'),
      className: 'evtb-event-title'
    }],
    // DESCRIPTION
    ['core/paragraph', {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Event Description', 'events-block'),
      className: 'evtb-event-description'
    }],
    // LOCATION
    ['core/paragraph', {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Event Location', 'events-block'),
      className: 'evtb-event-location'
    }],
    // PRICE + READ MORE GROUP
    ['core/group', {
      className: 'evtb-price-read-more'
    }, [['core/paragraph', {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Event Price', 'events-block'),
      className: 'evtb-event-price'
    }], ['core/buttons', {}, [['core/button', {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Read More', 'events-block'),
      className: 'evtb-event-read-more',
      url: ''
    }]]]]]]]]]];
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Event Settings', 'events-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              style: {
                width: '100%',
                marginTop: '16px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                style: {
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600'
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Details Background Color', 'events-block')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
                value: detailsBackgroundColor,
                onChange: color => setAttributes({
                  detailsBackgroundColor: color || '#ffffff'
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        ...blockProps,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "evtb-event-card",
          children: [!hasImageBlock && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "evtb-add-image-block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isSmall: true,
              isSecondary: true,
              onClick: () => innerBlockTemplate(true),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Image Block', 'events-block')
            })
          }), hasImageBlock && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "evtb-add-image-block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isSmall: true,
              isSecondary: true,
              onClick: () => innerBlockTemplate(false),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove Image Block', 'events-block')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "evtb-event-details",
            style: {
              '--evtb-details-bg': detailsBackgroundColor || '#ffffff'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "evtb-event-details-inner",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
                template: TEMPLATE,
                templateLock: false,
                allowedBlocks: ['core/group', 'core/image', 'evtb/event-date-badge', 'core/heading', 'core/paragraph', 'core/list', 'core/buttons', 'core/button'],
                renderAppender: false
              })
            })
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      evtbBlockId,
      detailsBackgroundColor
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: `evtb-event-item${evtbBlockId ? ` evtb-block-${evtbBlockId}` : ''}`,
      style: {
        '--evtb-details-bg': detailsBackgroundColor || '#ffffff'
      }
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "evtb-event-card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "evtb-event-details",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "evtb-event-details-inner",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
          })
        })
      })
    });
  }
});

// ========================================
// EXTEND CORE/PARAGRAPH BLOCK FOR TIME SETTINGS
// ========================================

// Add custom attributes to core/paragraph block
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.addFilter)('blocks.registerBlockType', 'evtb/paragraph-time-attributes', (settings, name) => {
  if (name !== 'core/paragraph') {
    return settings;
  }
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      evtbStartTime: {
        type: 'string',
        default: '09:00'
      },
      evtbEndTime: {
        type: 'string',
        default: '17:00'
      },
      evtbIsTimeSet: {
        type: 'boolean',
        default: false
      }
    }
  };
});

// Add Time Settings panel to paragraph block with evtb-event-time class
const withTimeSettings = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      attributes,
      setAttributes,
      name
    } = props;

    // Only apply to core/paragraph with evtb-event-time class
    if (name !== 'core/paragraph' || !attributes.className || !attributes.className.includes('evtb-event-time')) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(BlockEdit, props);
    }
    const {
      evtbStartTime,
      evtbEndTime,
      evtbIsTimeSet
    } = attributes;

    // Get parent Event Item context
    const parentContext = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
      const {
        getBlockParents,
        getBlock
      } = select('core/block-editor');
      const parentIds = getBlockParents(props.clientId);

      // Find evtb/event-item parent
      for (let parentId of parentIds) {
        const parentBlock = getBlock(parentId);
        if (parentBlock && parentBlock.name === 'evtb/event-item') {
          return {
            clientId: parentId,
            startTime: parentBlock.attributes.eventStartTime || '09:00',
            endTime: parentBlock.attributes.eventEndTime || '17:00'
          };
        }
      }
      return null;
    }, [props.clientId]);

    // Use parent times or own times
    const currentStartTime = parentContext?.startTime || evtbStartTime;
    const currentEndTime = parentContext?.endTime || evtbEndTime;

    // Handle time changes
    const handleStartTimeChange = newTime => {
      setAttributes({
        evtbStartTime: newTime,
        evtbIsTimeSet: true
      });

      // Update parent Event Item block
      if (parentContext) {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/block-editor').updateBlockAttributes(parentContext.clientId, {
          eventStartTime: newTime
        });
      }

      // Update paragraph content
      updateParagraphContent(newTime, currentEndTime);
    };
    const handleEndTimeChange = newTime => {
      setAttributes({
        evtbEndTime: newTime,
        evtbIsTimeSet: true
      });

      // Update parent Event Item block
      if (parentContext) {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/block-editor').updateBlockAttributes(parentContext.clientId, {
          eventEndTime: newTime
        });
      }

      // Update paragraph content
      updateParagraphContent(currentStartTime, newTime);
    };

    // Update paragraph content with formatted time
    const updateParagraphContent = (startTime, endTime) => {
      const formattedTime = `${(0,_shared_helpers__WEBPACK_IMPORTED_MODULE_8__.formatTime12Hour)(startTime)} – ${(0,_shared_helpers__WEBPACK_IMPORTED_MODULE_8__.formatTime12Hour)(endTime)}`;
      setAttributes({
        content: formattedTime
      });
    };

    // Sync parent times to paragraph content on mount
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
      if (parentContext && evtbIsTimeSet) {
        updateParagraphContent(currentStartTime, currentEndTime);
      }
    }, [parentContext?.startTime, parentContext?.endTime]);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Time Settings', 'events-block'),
      className: 'evtb-time-settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', {
      className: 'evtb-start-time-input'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)('strong', {}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Start Time', 'events-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)('input', {
      type: 'time',
      value: currentStartTime,
      onChange: e => handleStartTimeChange(e.target.value),
      onClick: e => {
        if (e.target.showPicker) {
          e.target.showPicker();
        }
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', {
      className: 'evtb-end-time-input'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)('strong', {}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('End Time', 'events-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)('input', {
      type: 'time',
      value: currentEndTime,
      onChange: e => handleEndTimeChange(e.target.value),
      onClick: e => {
        if (e.target.showPicker) {
          e.target.showPicker();
        }
      }
    })))));
  };
}, 'withTimeSettings');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.addFilter)('editor.BlockEdit', 'evtb/paragraph-time-settings', withTimeSettings);

/***/ },

/***/ "./src/events-grid/index.js"
/*!**********************************!*\
  !*** ./src/events-grid/index.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/helpers */ "./src/shared/helpers.js");
/* harmony import */ var _blocks_events_grid_block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/events-grid/block.json */ "./blocks/events-grid/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * Events Grid Block (Parent Container)
 * WordPress Block Standard: Import metadata from block.json
 */









// Register Events Grid Block using block.json metadata

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_blocks_events_grid_block_json__WEBPACK_IMPORTED_MODULE_7__.name, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Events Block', 'events-block'),
  edit: ({
    attributes,
    setAttributes,
    clientId
  }) => {
    const {
      columns,
      hideYear,
      hidePastEvents
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: 'evtb-events-grid-container',
      style: {
        '--grid-columns': columns
      }
    });
    const {
      insertBlocks,
      updateBlockAttributes
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core/block-editor');

    // Get inner blocks to check if empty
    const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('core/block-editor').getBlock(clientId)?.innerBlocks || [], [clientId]);

    // Get default images - will be used in template
    const pluginData = window.evtbPluginData || {};
    const defaultImages = pluginData.images ? [pluginData.images.crazyDJ || '', pluginData.images.rockBand || '', pluginData.images.foodDistribution || ''] : ['', '', ''];

    // Auto-populate default events if block is empty (first time insertion)
    // Use ref to prevent duplicate insertions
    const hasPopulated = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => false, []);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
      // Only run once when block is truly empty and images are available
      if (innerBlocks.length === 0 && defaultImages[0] && !hasPopulated) {
        const eventData = [{
          eventImage: defaultImages[0],
          eventImageAlt: 'Crazy DJ Experience Santa Cruz',
          eventDate: '',
          eventStartTime: '09:00',
          eventEndTime: '17:00',
          isDefault: true,
          hasImage: true,
          contentPopulated: false
        }, {
          eventImage: defaultImages[1],
          eventImageAlt: 'Cute Girls Rock Band Performance',
          eventDate: '',
          eventStartTime: '09:00',
          eventEndTime: '17:00',
          isDefault: true,
          hasImage: true,
          contentPopulated: false
        }, {
          eventImage: defaultImages[2],
          eventImageAlt: 'Free Food Distribution At Mumbai',
          eventDate: '',
          eventStartTime: '09:00',
          eventEndTime: '17:00',
          isDefault: true,
          hasImage: true,
          contentPopulated: false
        }];
        try {
          const defaultEventBlocks = eventData.map(data => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('evtb/event-item', data));
          insertBlocks(defaultEventBlocks, 0, clientId, false);

          // Force update attributes after a short delay to ensure proper initialization
          setTimeout(() => {
            const updatedInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select)('core/block-editor').getBlock(clientId)?.innerBlocks || [];
            updatedInnerBlocks.forEach((block, index) => {
              if (eventData[index] && block) {
                // Force set all attributes including eventDate
                updateBlockAttributes(block.clientId, {
                  ...eventData[index],
                  // Ensure eventDate is definitely set
                  eventDate: eventData[index].eventDate
                });
              }
            });
          }, 100);
        } catch (error) {
          console.error('❌ Error inserting blocks:', error);
        }
      }
    }, [innerBlocks.length, defaultImages[0]]);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Grid Settings', 'events-block'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Columns', 'events-block'),
            value: columns,
            onChange: value => setAttributes({
              columns: parseInt(value) || 2
            }),
            min: 1,
            max: 3,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns in the grid (1-3)', 'events-block'),
            __next40pxDefaultSize: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Hide Year (All Events)', 'events-block'),
            checked: hideYear,
            onChange: value => setAttributes({
              hideYear: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toggle to hide or show the year in all event date badges', 'events-block'),
            __nextHasNoMarginBottom: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Hide Past Events', 'events-block'),
            checked: hidePastEvents,
            onChange: value => setAttributes({
              hidePastEvents: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Automatically hide events that have passed', 'events-block'),
            __nextHasNoMarginBottom: true
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        ...blockProps,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
          allowedBlocks: ['evtb/event-item'],
          template: [['evtb/event-item', {
            eventImage: defaultImages[0],
            eventImageAlt: 'Crazy DJ Experience Santa Cruz',
            eventDate: '',
            isDefault: true,
            hasImage: true
          }], ['evtb/event-item', {
            eventImage: defaultImages[1],
            eventImageAlt: 'Cute Girls Rock Band Performance',
            eventDate: '',
            isDefault: true,
            hasImage: true
          }], ['evtb/event-item', {
            eventImage: defaultImages[2],
            eventImageAlt: 'Free Food Distribution At Mumbai',
            eventDate: '',
            isDefault: true,
            hasImage: true
          }]],
          renderAppender: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.ButtonBlockAppender, {})
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      columns
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'evtb-events-grid-container evtb-front-view',
      style: {
        '--columns': columns
      }
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
    });
  }
});

/***/ },

/***/ "./src/shared/helpers.js"
/*!*******************************!*\
  !*** ./src/shared/helpers.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatTime12Hour: () => (/* binding */ formatTime12Hour),
/* harmony export */   getCurrentDate: () => (/* binding */ getCurrentDate),
/* harmony export */   getDefaultImages: () => (/* binding */ getDefaultImages)
/* harmony export */ });
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Shared Helper Functions
 * Used across all event blocks
 */


// Get current date formatted
const getCurrentDate = () => {
  const now = new Date();
  return (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_0__.dateI18n)('Y-m-d', now);
};

// Get default images from plugin data
const getDefaultImages = () => {
  if (window.evtbPluginData && window.evtbPluginData.images) {
    return [window.evtbPluginData.images.crazyDJ || '', window.evtbPluginData.images.rockBand || '', window.evtbPluginData.images.foodDistribution || ''];
  }
  return ['', '', ''];
};

// Convert 24-hour time to 12-hour AM/PM format
const formatTime12Hour = time24 => {
  if (!time24) return '';
  const [hours, minutes] = time24.split(':');
  let hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12; // 0 should be 12

  return `${hour}:${minutes} ${ampm}`;
};

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["compose"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/date"
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["date"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-grid */ "./src/events-grid/index.js");
/* harmony import */ var _event_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-item */ "./src/event-item/index.js");
/* harmony import */ var _event_date_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-date-badge */ "./src/event-date-badge/index.js");
/**
 * Events Plugin - Main Entry Point
 * WordPress Block Standard: Single build file for all blocks
 * Registers all blocks using block.json metadata
 */

// Import all block registration functions



})();

/******/ })()
;
//# sourceMappingURL=index.js.map