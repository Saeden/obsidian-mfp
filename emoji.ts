import { EditorView, WidgetType } from "@codemirror/view";

export class EmojiWidget extends WidgetType {
  toDOM(view: EditorView): HTMLElement {
    const div = document.createElement("span");

    div.innerText = "👉";

    return div;
  }
}

export class HalfCompletedWidget extends WidgetType {
    toDOM(view: EditorView): HTMLElement {
        const label = document.createElement("label");

        label.className = "task-list-label";

        // Set contenteditable attribute to false
        label.setAttribute("contenteditable", "false");

        const input = document.createElement("input");

        input.className = "task-list-item-checkbox";
        input.type = "checkbox";

        // Set data-task attribute
        input.setAttribute("data-task", "/");

        // Append the input element to the label element
        label.appendChild(input);

        return label;

    }
}

export class HalfCompletedWidgetTest extends WidgetType {
    toDOM(view: EditorView): HTMLElement {
        const div = document.createElement("span");
    
        div.innerText = "TASK";
    

        

        return div;
      }
}