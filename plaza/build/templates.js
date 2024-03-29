this["templates"] = this["templates"] || {};

this["templates"]["admin/admin"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "hide";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"grid grid--guttered\">\n<div class=\"col\">\n<button class=\"js-logout\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.pieces : depth0)) != null ? stack1.admin : stack1)) != null ? stack1.logout : stack1), depth0))
    + "</button>\n</div>\n</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<form action=\"#\" class=\"js-submit_login\">\n<label for=\"email\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.pieces : depth0)) != null ? stack1.admin : stack1)) != null ? stack1.email_label : stack1), depth0))
    + "</label>\n<input type=\"email\" id=\"email\" name=\"email\">\n<label for=\"password\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.pieces : depth0)) != null ? stack1.admin : stack1)) != null ? stack1.password_label : stack1), depth0))
    + "</label>\n<input type=\"password\" id=\"password\" name=\"password\">\n<button type=\"submit\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.pieces : depth0)) != null ? stack1.admin : stack1)) != null ? stack1.submit : stack1), depth0))
    + "</button>\n</form>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"admin js-login_box "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user_id : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user_id : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["templates"]["admin/author"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<p class=\"p--medium hide_on_small\">\n"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.pieces : depth0)) != null ? stack1.blog : stack1)) != null ? stack1.by : stack1), depth0))
    + " <a href=\"/lists/blog/authors/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.handle : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a><br>\n<a href=\"https://twitter.com/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.handle : stack1), depth0))
    + "\">@"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.handle : stack1), depth0))
    + "</a>\n</p>\n";
},"useData":true});

this["templates"]["admin/author_input"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input class=\"em input--inline\" placeholder=\"Add an author\" type=\"text\" name=\"author_input\">\n";
},"useData":true});

this["templates"]["admin/edit_admin"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<input type=\"file\" class=\"hide\" data-image-input>\n\n<div class=\"grid padded\">\n<div class=\"col col--2of12\">\n<p><button class=\"js-save_edit\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.pieces : depth0)) != null ? stack1.admin : stack1)) != null ? stack1.save : stack1), depth0))
    + "</button></p>\n<p><button class=\"button--transparent js-destroy\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.pieces : depth0)) != null ? stack1.admin : stack1)) != null ? stack1["delete"] : stack1), depth0))
    + "</button></p>\n</div>\n<div class=\"col col--3of12\">\n<p class=\"medium_bottom\">\n<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.thumbnail : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + " Thumbnail\" data-content-image-key=\"thumbnail\">\n</p>\n</div>\n</div>\n";
},"useData":true});

this["templates"]["admin/file_link"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<small>[<span contenteditable data-key=\""
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "</span>]</small>\n";
},"useData":true});

this["templates"]["admin/list_admin"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"padded\">\n<button class=\"medium_bottom\" data-new=\"photo\">Nouvelle Photo</button><br>\n<button data-new=\"video\">Nouveau Vidéo</button>\n</div>\n";
},"useData":true});

this["templates"]["admin/piece_admin"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<input type=\"file\" class=\"hide js-image_input\">\n<input type=\"file\" class=\"hide js-file_input\">\n\n<button class=\"button--tight js-save_piece\" disabled>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.pieces : depth0)) != null ? stack1.admin : stack1)) != null ? stack1.save : stack1), depth0))
    + "</button>\n";
},"useData":true});

this["templates"]["admin/piece_file_link"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<small>[<span contenteditable class=\"contenteditable--clickable\" data-file-key=\""
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "</span>]</small>\n";
},"useData":true});

this["templates"]["admin/piece_link"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<small>[<span contenteditable data-key=\""
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "</span>]</small>\n";
},"useData":true});

this["templates"]["admin/tag"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"/lists/blog/tags/"
    + alias4(((helper = (helper = helpers.tag || (depth0 != null ? depth0.tag : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data}) : helper)))
    + "\" data-tag contenteditable=\"true\">"
    + alias4(((helper = (helper = helpers.tag || (depth0 != null ? depth0.tag : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"useData":true});

this["templates"]["admin/tag_input"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input class=\"em input--inline\" placeholder=\"Add a tag\" type=\"text\" name=\"tag_input\">\n";
},"useData":true});

this["templates"]["answer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"suggestion\">\n<!-- <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"suggestion__image\"> -->\n<span class=\"suggestion__name\">"
    + alias4(container.lambda(depth0, depth0))
    + "</span>\n</div>\n";
},"useData":true});

this["templates"]["answers"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"col\" style=\"opacity: "
    + alias3((helpers.divide || (depth0 && depth0.divide) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].highest_count : depths[1]),{"name":"divide","hash":{},"data":data}))
    + ";\">\n<h2 class=\"inline_block flat_bottom strong\">\n"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\n</h2>\n<small class=\"strong\">"
    + alias3(container.lambda(depth0, depth0))
    + "</small>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"grid grid--guttered\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.answers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useDepths":true});