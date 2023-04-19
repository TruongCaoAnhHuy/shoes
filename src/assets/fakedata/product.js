import images from '../image';

const product = [
    {
        id: 1,
        isTrend: false,
        image: images.grayShoes,
        desc: 'Giày chạy bộ Run One - Xám',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunone-xam',
    },
    {
        id: 2,
        isTrend: true,
        image: images.grayShoes2,
        desc: 'Giày chạy bộ Run One - Xám nhạt',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunone-xamnhat',
    },
    {
        id: 3,
        isTrend: true,
        image: images.cushionShoes,
        desc: 'Giày chạy bộ Run Cushion - Đen',
        price: '194000',
        sale: '399000',
        pPath: 'giayruncushion-den',
    },
    {
        id: 4,
        isTrend: true,
        image: images.activeShoes,
        desc: 'Giày chạy bộ Run Active - Xanh lá',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunactive-xanhla',
    },
    {
        id: 5,
        isTrend: false,
        image: images.activeShoes2,
        desc: 'Giày chạy bộ Run Active - Hồng',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunactive-hong',
    },
    {
        id: 6,
        isTrend: false,
        image: images.fitnessShoes,
        desc: 'Giày chạy bộ Run Fitness - Xám',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunfitness-xam',
    },
    {
        id: 7,
        isTrend: true,
        image: images.supportShoes,
        desc: 'Giày chạy bộ Run Support - Đen',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunsupport-den',
    },
    {
        id: 8,
        isTrend: false,
        image: images.cushionShoes2,
        desc: 'Giày chạy bộ Run Cushion - Đen',
        price: '194000',
        sale: '399000',
        pPath: 'giayruncushion-den',
    },
];

const productPopulars = product.filter((item) => item.isTrend);

export { product, productPopulars };
