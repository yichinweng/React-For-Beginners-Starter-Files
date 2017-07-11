import Rebase from 're-base';
import firebaseConfig from './config/firebase';

const base = Rebase.createClass(firebaseConfig);

export default base;