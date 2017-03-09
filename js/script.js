var ol;
var div;

var myLib = {

    wrapElement: function() {
        div = document.createElement('div');
        div.classList.add('wrap');
        document.body.appendChild(div);
    },

    headElement: function(headName) {
        var h1 = document.createElement('h1');
        h1.innerHTML = headName;
        div.appendChild(h1);
    },

    olElement: function () {
        ol = document.createElement('ol');
        div.appendChild(ol);
    },

    liElement: function(li_elem) {
        var li = document.createElement('li');
        li.innerHTML = li_elem;
        ol.appendChild(li);
    },

    inputElement: function(label_elem) {
        var label = document.createElement('label');
        label.innerHTML = '<input type="checkbox">' + label_elem;
        ol.appendChild(label);
    },

    buttonElement: function() {
        var btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerHTML = btnName;
        div.appendChild(btn);
    }
};

var headName = 'Тест по программированию';
var btnName = 'Проверить мои результаты';

var question = 'Вопрос №';
var answers = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

myLib.wrapElement();
myLib.headElement(headName);
myLib.olElement();

for(var i = 1; i < 4; i++) {
    myLib.liElement(question + i);
    myLib.inputElement(answers[0]);
    myLib.inputElement(answers[1]);
    myLib.inputElement(answers[2]);
}

myLib.buttonElement();
