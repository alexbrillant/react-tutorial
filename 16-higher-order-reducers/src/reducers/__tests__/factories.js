import { remove, add } from "../factories";

describe('factories', () => {
    let test = (state = {}, action) => state

    it('should add ADD action', () => {
        let reducer = add("TEST")(test)

        let actualState = reducer([], { type: 'ADD_TEST', payload: 1 })

        expect(actualState).toEqual([1])
    })

    it('should add REMOVE action', () => {
        let reducer = remove("TEST")(test)

        let actualState = reducer([1], { type: 'REMOVE_TEST', payload: 1 })

        expect(actualState).toEqual([])
    })
})