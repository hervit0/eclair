import {DefaultCheeseDataAccessor, DefaultCheeseLabelAdapter} from "./adapter";

describe('Adapter', () => {
    it('cheese label adapter understands cheese data accessor', () => {
        const accessor = new DefaultCheeseDataAccessor();
        const adapter = new DefaultCheeseLabelAdapter(accessor);

        const label = adapter.getLabel('Brie');

        expect(label).toEqual('Brie - 12');
    });
});
