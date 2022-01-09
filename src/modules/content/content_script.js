import { addPageScript } from 'appRoot/common/utils';
import { CMD_RUN, CMD_STOP } from 'appRoot/common/constants';

addPageScript('js/inner.js');

function run() {
   
};

function stop() {

}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.cmd == CMD_RUN) {
        run();
    }
    sendResponse('run');
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.cmd == CMD_STOP) {
        stop();
    }
});
