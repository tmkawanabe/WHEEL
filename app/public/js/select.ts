/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

$(() => {

    // socket io
    const socket = io('/swf/select');
    const getFileListSocket = new GetFileListSocket(socket, config.extension.project);

    // file dialog
    const dialog = new FileDialog(getFileListSocket);

    /**
     * set dialog events
     */
    (function setDialogEvents() {
        dialog
            .onDirIconMouseup()
            .onDirIconDblClick()
            .onFileIconMouseup()
            .onFileIconDblClick(ClientUtility.moveWorkflowLink)
            .onChangeAddress()
            .updateDialog();
    })();
});
