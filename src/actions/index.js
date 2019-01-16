import {SAVE_COMMENT} from 'save_comment';

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}