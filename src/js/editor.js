/**
 * WordPress dependencies
 */
import {
	unregisterBlockType,
	unregisterBlockStyle,
	unregisterBlockVariation,
	registerBlockStyle,
	registerBlockVariation,
} from '@wordpress/blocks';
import { dispatch } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';

/**
 * Register block styles
 *
 * @type {Object} Add the names of blocks and styles to register here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
const registerBlockStyles = {
	'core/image': [
		{
			name: 'position-absolute-left',
			label: 'Absolute Left',
		},
		{
			name: 'position-absolute-right',
			label: 'Absolute Right',
		},
		{
			name: 'position-absolute-bottom',
			label: 'Absolute Bottom',
		},
	],
	'core/group': [
		{
			name: 'position-relative',
			label: 'Relative Position',
		},
	],
	'core/columns': [
		{
			name: 'reverse-on-mobile',
			label: 'Reverse on Mobile',
		},
	],
};

/**
 * Register block variations
 *
 * @type {Object} Add the names of blocks and variations to register here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
const registerBlockVariations = {
	'core/group': {
		name: 'group-section',
		title: 'Section',
		description: 'Section Block',
		attributes: {
			tagName: 'section',
		},
	},
};

/**
 * Unregister blocks
 *
 * @type {Array} Add the names of blocks to unregister here
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#using-a-deny-list
 */
const unregisterBlocks = [
	// "core/verse"
];

/**
 * Remove editor panels
 *
 * @type {Array} Add the names of panels to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-edit-post/#removeeditorpanel
 */
const removeEditorPanels = [
	//"discussion-panel"
];

/**
 * Remove block styles
 *
 * @type {Object} Add the names of blocks and styles to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
const unregisterBlockStyles = {
	// "core/button": "outline",
};

/**
 * Remove block variations
 *
 * @type {Object} Add the names of blocks and variations to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
const unregisterBlockVariations = {
	// "core/columns": "two-columns-two-thirds-one-third",
};

/**
 * Here we hook into the editor initialization and unregister the blocks,
 * remove editor panels, remove block styles, remove block variations,
 * register block styles, and register block variations – all as defined above.
 */
domReady(function () {
	Object.keys(registerBlockStyles).forEach((block) => {
		registerBlockStyle(block, registerBlockStyles[block]);
	});
	Object.keys(registerBlockVariations).forEach((block) => {
		registerBlockVariation(block, registerBlockVariations[block]);
	});
	unregisterBlocks.forEach((block) => {
		unregisterBlockType(block);
	});

	// Only run if we are in the post editor
	if (null !== dispatch('core/edit-post')) {
		const { removeEditorPanel } = dispatch('core/edit-post');
		removeEditorPanels.forEach((panel) => {
			removeEditorPanel(panel);
		});
	}
	Object.keys(unregisterBlockStyles).forEach((block) => {
		unregisterBlockStyle(block, unregisterBlockStyles[block]);
	});
	Object.keys(unregisterBlockVariations).forEach((block) => {
		unregisterBlockVariation(block, unregisterBlockVariations[block]);
	});
});
