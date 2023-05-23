[URL Rewrite]
^https?:\/\/(ios|ios-beta)\.chat\.openai\.com\/backend-api\/(accounts\/check\/|models) url script-response-body ChatGPTPlusCrack.js
[MITM]
hostname = ios*.chat.openai.com
# ChatGPT Plus 解锁
# hahaha
var login_CheckIn = /https?:\/\/ios.chat.openai.com\/backend-api\/(accounts\/check\/|models)/
var obj = JSON.parse($response.body);
if (login_CheckIn.test($request.url)) {
obj["accounts"]["default"]["entitlements"]["plus"] = true; obj["accounts"]["default"]["account"]["subscriptions"]["b001"]["confirmed"] = true;
obj["accounts"]["default"]["features"] = ["data_deletion_enabled", "data_export_enabled", "infinite_scroll_history", "log_intercom_events", "dfw_message_feedback", "show_existing_user_age_confirmation_modal", "new_model_switcher_20230512", "dfw_inline_message_regen_comparison", "model_switcher", "log_statsig_events"];
obj["accounts"]["default"]["last_active_subscription"] = { "expires_at": "2999-09-28T13:14:52+00:00", "subscription_id": "a001", "subscription_plan": "chatgptplusplan", "has_active_subscription": true };
obj["accounts"]["default"]["subscription"] = { "subscription_id": "a001", "will_renew": true, "purchase_origin_platform": "mobile" };
} else {
obj = { 
"categories": [               
{ "category": "default", "subscription_level": "free", "browsing_model": null, "code_interpreter_model": null, "default_model": "text-davinci-002-render-sha", "human_category_name": "Default (GPT-3.5)", "plugins_model": null },
{ "category": "plus", "subscription_level": "plus", "browsing_model": "gpt-4-browsing", "code_interpreter_model": "gpt-4-code-interpreter", "default_model": "gpt-4-mobile", "human_category_name": "GPT-4 (Mobile, V2)", "plugins_model": "gpt-4-plugins" } 
],
"models": [
{ "tags": ["gpt-3-compatible"], "slug": "text-davinci-002-render-sha-mobile", "title": "Default (GPT-3.5) (Mobile)", "description": "Our fastest model, great for most everyday tasks.", "max_tokens": 4095, "qualitative_properties": { "speed": [4, 5], "reasoning": [3, 5], "conciseness": [2, 5] } },
{ "tags": ["mobile"], "slug": "gpt-4-mobile", "title": "GPT-4 (Mobile, V2)", "description": "Our most capable model, great for tasks that require creativity and advanced reasoning.", "max_tokens": 4095, "qualitative_properties": { "speed": [2, 5], "reasoning": [5, 5], "conciseness": [4, 5] } }, 
{ "tags": [], "slug": "text-davinci-002", "title": "Default (GPT-3.5)", "description": "Our fastest model, great for most everyday tasks.", "max_tokens": 4095, "qualitative_properties": { "speed": [4, 5], "reasoning": [3, 5], "conciseness": [2, 5] } },
{ "tags": [], "slug": "gpt-4", "title": "GPT-4", "description": "Our most capable model, great for tasks that require creativity and advanced reasoning.", "max_tokens": 4095, "qualitative_properties": { "speed": [2, 5], "reasoning": [5, 5], "conciseness": [4, 5] } },
{ "slug": "gpt-4-browsing", "qualitative_properties": {}, "title": "Web Browsing", "enabled_tools": [ "tools" ], "max_tokens": 40
