import { Fragment, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack/HStack/HStack';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { Icon } from '../../../Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

export interface ListBoxItem<T extends string> {
    value: string,
    content: string
    disabled?: boolean
}

interface ListBoxProps<T extends string> {
    items: ListBoxItem<T>[],
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void
    readonly?: boolean;
    label?: string
    direction?: DropdownDirection
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className, items, value, defaultValue, onChange, readonly, label, direction = 'bottom right',
    } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedItem = useMemo(() => items.find((item) => item.value === value), [items, value]);

    return (
        <HStack gap="8">
            {label && <span>{`${label}>`}</span>}
            <HListBox className={classNames(cls.ListBox, {}, [className, popupCls.popup])} as="div" value={value} onChange={onChange} disabled={readonly}>
                <HListBox.Button className={cls.trigger}>
                    <Button theme="filled" disabled={readonly} addonRight={<Icon Svg={ArrowIcon} width={32} height={32} />}>
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled, [cls.selected]: selected })}>
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
