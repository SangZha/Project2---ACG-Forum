﻿// JavaScript Document
$(function(){
    'use strict';
    window.setTimeout("history.go(-2);", 3000);

    $("#go_back").click(function goBack() {
        if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) { // IE  
            if (history.length > 0) {
                window.history.go(-2);
            } else {
                window.opener = null; window.window.location.href = 'Home.aspx'
            }
        } else { //非IE浏览器  
            if (navigator.userAgent.indexOf('Firefox') >= 0 ||
                navigator.userAgent.indexOf('Opera') >= 0 ||
                navigator.userAgent.indexOf('Safari') >= 0 ||
                navigator.userAgent.indexOf('Chrome') >= 0 ||
                navigator.userAgent.indexOf('WebKit') >= 0) {

                if (window.history.length > 1) {
                    window.history.go(-2);
                } else {
                    window.opener = null; window.window.location.href = 'Home.aspx'
                }
            } else { //未知的浏览器  
                window.history.go(-2);
            }
        }
    });
});