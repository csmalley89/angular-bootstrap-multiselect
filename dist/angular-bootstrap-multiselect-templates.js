angular.module('btorfs.multiselect.templates', ['multiselect.html']);

angular.module("multiselect.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("multiselect.html",
    "<div class=\"btn-group\" style=\"width: 100%\">\n" +
    "    <button type=\"button\" class=\"btn dropdown-toggle\" ng-class=\"classesBtn\" ng-click=\"toggleDropdown()\" ng-disabled=\"disabled\" style=\"white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis;\">\n" +
    "        {{getButtonText()}}&nbsp;<span class=\"caret\"></span>\n" +
    "    </button>\n" +
    "    <div class=\"dropdown-menu dropdown-menu-form\"\n" +
    "        ng-style=\"{display: open ? 'block' : 'none'}\" style=\"width: 100%; overflow-x: auto\">\n" +
    "\n" +
    "        <div ng-show=\"showSelectAll\">\n" +
    "            <a ng-click=\"selectAll()\" href=\"\">\n" +
    "                <span class=\"fa fa-check\"></span> {{labels.selectAll || 'Select All'}}\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div ng-show=\"showUnselectAll\">\n" +
    "            <a ng-click=\"unselectAll()\" href=\"\">\n" +
    "                <span class=\"fa fa-remove\"></span> {{labels.unselectAll || 'Unselect All'}}\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div ng-show=\"(showSelectAll || showUnselectAll)\"\n" +
    "            class=\"divider\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div role=\"presentation\" ng-repeat=\"option in selectedOptions\" class=\"active\">\n" +
    "            <a class=\"item-selected dropdown-item\" href=\"\" title=\"{{showTooltip ? getDisplay(option) : ''}}\" ng-click=\"toggleItem(option); $event.stopPropagation()\" style=\"overflow-x: hidden;text-overflow: ellipsis\">\n" +
    "                <span class=\"fa fa-remove\"></span>\n" +
    "                {{getDisplay(option)}}\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div ng-show=\"selectedOptions.length > 0\" class=\"divider\"></div>\n" +
    "\n" +
    "        <div ng-show=\"showSearch\">\n" +
    "            <div class=\"dropdown-header\">\n" +
    "                <input type=\"text\" class=\"form-control input-sm\" style=\"width: 100%;\"\n" +
    "                       ng-model=\"searchFilter\" placeholder=\"{{labels.search || 'Search...'}}\" ng-change=\"updateOptions()\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"showSearch\" class=\"divider\"></div>\n" +
    "        <div role=\"presentation\" ng-repeat=\"option in unselectedOptions | filter:search() | limitTo: searchLimit\"\n" +
    "            ng-if=\"!isSelected(option)\"\n" +
    "            ng-class=\"{disabled : selectionLimit && selectedOptions.length >= selectionLimit}\">\n" +
    "            <a class=\"item-unselected dropdown-item\" href=\"\" title=\"{{showTooltip ? getDisplay(option) : ''}}\" ng-click=\"toggleItem(option); $event.stopPropagation()\" style=\"overflow-x: hidden;text-overflow: ellipsis\">\n" +
    "                {{getDisplay(option)}}\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"divider\" ng-show=\"selectionLimit > 1\"></div>\n" +
    "        <div role=\"presentation\" ng-show=\"selectionLimit > 1\">\n" +
    "            <a>{{selectedOptions.length || 0}} / {{selectionLimit}} {{labels.itemsSelected || 'selected'}}</a>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
