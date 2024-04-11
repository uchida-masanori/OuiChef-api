"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const SUPABASE_URL = process.env.SUPABASE_URL;
;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const supabaseClient = (0, supabase_js_1.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);
exports.default = supabaseClient;
