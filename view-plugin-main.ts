import {
	ViewUpdate,
	PluginValue,
	EditorView,
	ViewPlugin,
  } from "@codemirror/view";
  
  class ExamplePlugin implements PluginValue {
	constructor(view: EditorView) {
	  // ...
	}
  
	update(update: ViewUpdate) {
	  // ...
	  //console.log(update);
	}
  
	destroy() {
	  // ...
	}
  }
  
  export const examplePlugin = ViewPlugin.fromClass(ExamplePlugin);

  // in the `onload` method of your Obsidian plugin