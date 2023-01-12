import {
    atom,
    selector,
} from 'recoil';
import { SingnInResult } from '@/models/signIn';

const initialState: SingnInResult = {
    flag: '',
    number: '',
    name: ''
};

export const signInState = atom({
    key: 'signInState',
    default: initialState,
});
