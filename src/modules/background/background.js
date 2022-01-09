import { sendChromeMessage } from 'appRoot/common/utils';
import { CMD_RUN, CMD_STOP } from 'appRoot/common/constants';

chrome.contextMenus.create({
    title: '启动',
    contexts: ['all'],
    onclick: function () {
        sendChromeMessage(
            { cmd: CMD_RUN, value: CMD_RUN },
            function (response) {
                console.log(CMD_RUN);
            },
        );
    },
});
chrome.contextMenus.create({
    title: '停止',
    contexts: ['all'],
    onclick: function () {
        sendChromeMessage(
            { cmd: CMD_STOP, value: CMD_STOP },
            function (response) {
                console.log(CMD_STOP);
            },
        );
    },
});
