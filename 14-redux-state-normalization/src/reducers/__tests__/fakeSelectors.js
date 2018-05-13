import { getBarState, firstSelector, secondSelector, thirdSelector, myComposedSelector } from "../fakeSelectors";

describe('selectors', () => {
    it('should select bars state', () => {
        expect(getBarState({ foo: { bar: [0] } })).toEqual([0])
    })

    it('should select a state', () => {
        expect(firstSelector({ a: 1 })).toEqual(1)
    })

    it('should select b state', () => {
        expect(secondSelector({ b: 1 })).toEqual(1)
    })

    it('should select c state', () => {
        expect(thirdSelector({ c: 1 })).toEqual(1)
    })

    it('should calculate composed selector', () => {
        expect(myComposedSelector.resultFunc(2,2,2)).toEqual(8)
    })
})