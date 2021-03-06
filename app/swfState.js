/*
 * WHEEL (Workflow in Hierarchical distributEd parallEL)
 *
 * Copyright (c) 2016-2017 Research Institute for Information Technology(RIIT), Kyushu University. All rights reserved.
 * Copyright (c) 2016-2017 Advanced Institute for Computational Science, RIKEN. All rights reserved.
 */

"use strict";
/**
 * runnning state extension
 */
var SwfState;
(function (SwfState) {
    /**
     * state planning
     */
    SwfState.PLANNING = 'Planning';
    /**
     * state running
     */
    SwfState.RUNNING = 'Running';
    /**
     * state rerunning
     */
    SwfState.RERUNNING = 'ReRunning';
    /**
     * state waiting
     */
    SwfState.WAITING = 'Waiting';
    /**
     * state completed
     */
    SwfState.COMPLETED = 'Completed';
    /**
     * state failed
     */
    SwfState.FAILED = 'Failed';
    /**
     * whether specified log json or project json is planning or not
     * @param json project json data or log json data
     * @return whether specified log json or project json is planning or not
     */
    function isPlanning(json) {
        return json.state === this.PLANNING;
    }
    SwfState.isPlanning = isPlanning;
    /**
     * whether specified log json or project json is running or not
     * @param json project json data or log json data
     * @return whether specified log json or project json is running or not
     */
    function isRunning(json) {
        return !this.isPlanning() && !this.isFinished();
    }
    SwfState.isRunning = isRunning;
    /**
     * whether specified log json or project json is finished or not
     * @param json project json data or log json data
     * @return whether specified log json or project json is finished or not
     */
    function isFinished(json) {
        return json.state === this.COMPLETED || json.state === this.FAILED;
    }
    SwfState.isFinished = isFinished;
})(SwfState || (SwfState = {}));
module.exports = SwfState;
//# sourceMappingURL=swfState.js.map
