import { Meta } from '@storybook/react/types-6-0'
import UserPicture from '../../components/elements/UserPicture'

export default {
    title: 'Elements/Graphical/UserPicture',
    component: UserPicture,
} as Meta

export const Default = {
    args: {
        src: 'https://phantom-elmundo.unidadeditorial.es/563c943e505bf5132d7f6d676c08bfd0/crop/0x0/3000x2000/resize/473/f/webp/assets/multimedia/imagenes/2021/09/22/16323254074650.jpg',
        width: 32,
    }
}