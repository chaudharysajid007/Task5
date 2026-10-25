
function getValue() {
  const element = document.getElementById("username");
  document.getElementById("valueResult").textContent =
    "Value: " + element.value;
}

function getInnerText() {
  const element = document.getElementById("textExample");
  document.getElementById("innerTextResult").textContent =
    "innerText: " + element.innerText;
}

function getTextContent() {
  const element = document.getElementById("contentExample");
  document.getElementById("contentResult").textContent =
    "textContent: " + element.textContent.trim();
}

function getInnerHTML() {
  const element = document.getElementById("htmlExample");
  document.getElementById("htmlResult").textContent =
    "innerHTML: " + element.innerHTML;
}

function getOuterHTML() {
  const element = document.getElementById("outerExample");
  document.getElementById("outerResult").textContent =
    "outerHTML: " + element.outerHTML;
}

function getChecked() {
  const element = document.getElementById("agree");
  document.getElementById("checkedResult").textContent =
    "Checked: " + element.checked;
}

function getSelectedIndex() {
  const element = document.getElementById("course");
  document.getElementById("indexResult").textContent =
    "Selected index: " + element.selectedIndex +
    "\nSelected course: " + element.value;
}

function getFiles() {
  const element = document.getElementById("fileInput");
  const output = document.getElementById("filesResult");

  if (element.files.length === 0) {
    output.textContent = "No file selected.";
    return;
  }

  const file = element.files[0];
  output.textContent =
    "File name: " + file.name +
    "\nFile size: " + file.size + " bytes" +
    "\nFile type: " + (file.type || "Unknown");
}

function getClassName() {
  const element = document.getElementById("classExample");
  document.getElementById("classResult").textContent =
    "className: " + element.className;
}

function getId() {
  const element = document.getElementById("idExample");
  document.getElementById("idResult").textContent =
    "ID: " + element.id;
}

function getAttributes() {
  const element = document.getElementById("attributesExample");
  const output = document.getElementById("attributesResult");

  const attributes = Array.from(element.attributes).map(function (attr) {
    return attr.name + " = " + attr.value;
  });

  output.textContent = attributes.join("\n");
}
