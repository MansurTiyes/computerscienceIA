export class DOMManipulation{
    //adds clicked event for a button
    static addClickEvent(elementId, callback) {
        let element = document.getElementById(elementId);
        if (element) {
          element.addEventListener('click', callback);
        }
    }

    
}