import {BehaviorSubject}  from 'rxjs';

export const subject = new BehaviorSubject(0);

export const dataService = {
    setData: d => subject.next({value: d }),
    clearData: () => subject.next(),
    getData: () => subject.asObservable()
};