//eb - apex 20/24 - popup lov stays in dom - modal fix - unload event deprecated
(function () {
    var topApex = apex.util.getTopApex();

    if (apex !== topApex) {
        return;
    }

    var $ = topApex.jQuery;

    topApex.gPageContext$
        .off("dialogclose.popupLovFix")
        .on("dialogclose.popupLovFix", function (event) {
            var modal$ = $(event.target);
            
            // only modal pages to handle
            if (!modal$.is('[id^="apex_dialog_"]')) {
                return;
            }

            var iframe = modal$.children("iframe")[0];
            var pageItem;
            var dialogPageNum;

            if (!iframe) {
                return;
            }

            // read modal id before its closed
            try {
                pageItem = iframe.contentDocument
                    .getElementById("pFlowStepId");
                dialogPageNum = pageItem && pageItem.value;
            } catch (error) {
                return;
            }

            if (!dialogPageNum) {
                return;
            }

            var lovs$ = $(
                '.a-PopupLOV-dialog[id^="PopupLov_' +
                dialogPageNum + '_"]'
            );

            lovs$.each(function () {
                var dlg$ = $(this);

                if (dlg$.data("uiDialog")) {
                    dlg$.dialog("close").remove();
                } else if (dlg$.data("apexPopup")) {
                    dlg$.popup("close").remove();
                }
            });
        });

})();