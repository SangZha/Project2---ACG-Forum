﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login_done.aspx.cs" Inherits="Login_done" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
<script type="text/javascript" src="javascript/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="javascript/login_undo.js"></script>
<link rel="stylesheet" href="css/login_undo.css"/>
</head>
<body>
    <div class ="center">
        <div class="content">
            <p>您已经登录啦，请勿重复登录哦～</p>
            <p runat="server" id="go_back">如果您的浏览器抽风，请点击这里返回原网页...</p>
        </div>
    </div>
</body>
</html>
