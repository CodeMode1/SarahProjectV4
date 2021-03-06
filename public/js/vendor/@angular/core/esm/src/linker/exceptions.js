/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { UNINITIALIZED } from '../change_detection/change_detection_util';
import { BaseException, WrappedException } from '../facade/exceptions';
/**
 * An error thrown if application changes model breaking the top-down data flow.
 *
 * This exception is only thrown in dev mode.
 *
 * <!-- TODO: Add a link once the dev mode option is configurable -->
 *
 * ### Example
 *
 * ```typescript
 * @Component({
 *   selector: 'parent',
 *   template: `
 *     <child [prop]="parentProp"></child>
 *   `,
 *   directives: [forwardRef(() => Child)]
 * })
 * class Parent {
 *   parentProp = "init";
 * }
 *
 * @Directive({selector: 'child', inputs: ['prop']})
 * class Child {
 *   constructor(public parent: Parent) {}
 *
 *   set prop(v) {
 *     // this updates the parent property, which is disallowed during change detection
 *     // this will result in ExpressionChangedAfterItHasBeenCheckedException
 *     this.parent.parentProp = "updated";
 *   }
 * }
 * ```
 * @stable
 */
export class ExpressionChangedAfterItHasBeenCheckedException extends BaseException {
    constructor(oldValue, currValue, context) {
        let msg = `Expression has changed after it was checked. Previous value: '${oldValue}'. Current value: '${currValue}'.`;
        if (oldValue === UNINITIALIZED) {
            msg +=
                ` It seems like the view has been created after its parent and its children have been dirty checked.` +
                    ` Has it been created in a change detection hook ?`;
        }
        super(msg);
    }
}
/**
 * Thrown when an exception was raised during view creation, change detection or destruction.
 *
 * This error wraps the original exception to attach additional contextual information that can
 * be useful for debugging.
 * @stable
 */
export class ViewWrappedException extends WrappedException {
    constructor(originalException, originalStack, context) {
        super(`Error in ${context.source}`, originalException, originalStack, context);
    }
}
/**
 * Thrown when a destroyed view is used.
 *
 * This error indicates a bug in the framework.
 *
 * This is an internal Angular error.
 * @stable
 */
export class ViewDestroyedException extends BaseException {
    constructor(details) {
        super(`Attempt to use a destroyed view: ${details}`);
    }
}
//# sourceMappingURL=exceptions.js.map