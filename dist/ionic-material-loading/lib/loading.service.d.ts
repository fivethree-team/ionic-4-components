import { BehaviorSubject } from 'rxjs';
export declare class LoadingService {
    loading: boolean;
    isComplete: boolean;
    loadChange: BehaviorSubject<boolean>;
    completeChange: BehaviorSubject<boolean>;
    constructor();
    load(): void;
    unload(): void;
    toggleSpinner(): void;
    complete(): void;
}
