import type { CityInfo, Place, Monument, Fact} from "../types";

export const cityInfo: CityInfo = {
    name: "Санкт-Петербург",
    country: "Россия",
    population: 5560000,
    description: "Культурная столица России, город на Неве с богатой историей и уникальной архитектурой",
    foundationYear: 1703
};

export const places: Place[] = [
    {
        id: 1,
        name: 'Новая Голландия',
        description: 'Остров с парком и общественными пространствами.',
        address: 'наб. Адмиралтейского канала, 2',
        pictureName: 'NewNetherlands.png'
    },
    {
        id: 2,
        name: 'Кофейня "Больше кофе"',
        description: 'Уютное место в центре города.',
        address: 'ул. Большая Конюшенная, 12',
        pictureName: 'BolsheCoffee.png'
    },
    {
        id: 3,
        name: 'Музей Фаберже',
        description: 'Музей яиц Фаберже и декоративно-прикладного искусства.',
        address: 'наб. реки Фонтанки, 21',
        pictureName: 'FabergeMuseum.png'
    },
    {
        id: 4,
        name: 'Мариинский театр',
        description: 'Всемирно известный театр оперы и балета.',
        address: 'Театральная пл., 1',
        pictureName: 'MarinasTheatre.png'
    },
    {
        id: 5,
        name: 'Бар "Блок"',
        description: 'Клуб с живой музыкой.',
        address: 'ул. Рубинштейна, 15',
        pictureName: 'BlocksBar.png'
    }
]

export const monuments: Monument[] = [
    {
        id: 1,
        name: 'Медный всадник',
        description: 'Памятник Петру I на Сенатской площади.',
        year: 1782,
        pictureName: 'CopperRider.png'
    },
    {
        id: 2,
        name: 'Казанский собор',
        description: 'Один из крупнейших храмов города.',
        year: 1811,
        pictureName: 'KazansCathedral.png'
    },
    {
        id: 3,
        name: 'Ростральные колонны',
        description: 'Символ морской славы России.',
        year: 1810,
        pictureName: 'RostralsColumns.png'
    },
    {
        id: 4,
        name: 'Исаакиевский собор',
        description: 'Четвёртый по величине купольный собор в мире. Музей.',
        year: 1858,
        pictureName: 'IsaacsCathedral.png'
    },
    {
        id: 5,
        name: 'Спас на Крови',
        description: 'Храм-памятник на месте убийства императора Александра II.',
        year: 1907,
        pictureName: 'SavedOnBlood.png'
    }
]

export const facts: Fact[] = [
    {
        id: 1,
        name: 'Основание',
        description: 'Город основан Петром I в 1703 году.',
        year: 1703
    },
    {
        id: 2,
        name: 'Переименование',
        description: 'В 1914 году переименован в Петроград, в 1924 — в Ленинград.',
        year: 1914
    },
    {
        id: 3,
        name: 'Возвращение имени',
        description: 'В 1991 году городу возвращено историческое название.',
        year: 1991
    },
    {
        id: 4,
        name: 'Разводные мосты',
        description: 'Традиция развода мостов появилась в XIX веке. Сегодня летом мосты разводят по графику, чтобы пропускать суда.',
        year: 1850
    },
    {
        id: 5,
        name: 'Зимний дворец и Эрмитаж',
        description: 'Зимний дворец построен в 1762 году, а с 1852 года в нём открыт Эрмитаж — один из крупнейших музеев мира.',
        year: 1762
    }
]