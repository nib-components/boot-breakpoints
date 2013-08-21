var breakpoints = require('breakpoints');
var media = require('breakpoint-media');
var Attributes = require('body-attributes');

/**
 * Set data attribute on the body for the current breakpoint
 */
Attributes.create(breakpoints.events, {
  'attr': 'data-breakpoint'
});

/**
 * Responsive media
 */
media.create();