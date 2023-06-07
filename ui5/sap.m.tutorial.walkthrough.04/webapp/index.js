sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App",
  })
    .then(function (oView) {
      oView.placeAt("content");
    })
    .catch(console.log("jellod"));
});
