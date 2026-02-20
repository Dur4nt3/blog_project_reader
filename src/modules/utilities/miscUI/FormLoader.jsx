import { Loader } from '@mantine/core';

export default function FormLoader({ color = null, size = null}) {
    return <Loader color={color !== null ? color : '#fbfbfc'} size={size !== null ? size : 24} type='bars' />;
}
