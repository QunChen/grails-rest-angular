<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Welcome to Grails</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <style type="text/css">
    [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
        display: none !important;
    }
    </style>

    <asset:stylesheet src="application.css"/>

    <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />

    <script type="text/javascript">
        window.contextPath = "${request.contextPath}";
    </script>
</head>

<body ng-app="myrestapp" >


<div id="content" role="main" ng-controller="BookController as bookCtrl">

    <section >
        <h1>Books</h1>
        <table class="table">
            <tr>
                <th>Id</th>
            <th>

                Title

            </th>
                <th>

                </th>
            </tr>
            <tr ng-repeat="book in bookCtrl.bookData track by book.id">
                <td><a ng-click="bookCtrl.show(book.id)">
                    {{book.id}}
                </a>
                </td>
                <td>
            {{book.title}}
      </td>
                <td>
                    <input type="button" value="delete" ng-click="bookCtrl.delete(book.id)">
                    <input type="button" value="edit" ng-click="bookCtrl.edit(book.id)">
                </td>
            </tr>
        </table>
    </section>

    <section >
        <form>
            <input type="text" ng-model="book.title">
            <input type="submit" value="add" ng-click="bookCtrl.add(book)">
        </form>
    </section>

    <section ng-show="bookCtrl.selected">
        <h5>Show:</h5>
        {{bookCtrl.selected}}
        <input type="button" value="clear" ng-click="bookCtrl.selected=null">
    </section>

    <section ng-show="bookCtrl.updated">
        <h5>Update:</h5>
        <p ng-model="bookCtrl.updated.id">
        <input type="text" ng-model="bookCtrl.updated.title">
        <input type="button" value="Update" ng-click="bookCtrl.update(bookCtrl.updated)">
    </section>
</div>

<div class="footer" role="contentinfo"></div>

<div id="spinner" class="spinner" style="display:none;">
    <g:message code="spinner.alt" default="Loading&hellip;"/>
</div>

<asset:javascript src="/myrestapp/myrestapp.js" />
</body>
</html>
