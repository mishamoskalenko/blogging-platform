import { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack/HStack/HStack';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string,
    content: string
    disabled?: boolean
}

interface ListBoxProps {
    items: ListBoxItem[],
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void
    readonly?: boolean;
    label?: string
    direction: DropdownDirection
}

export function ListBox(props: ListBoxProps) {
    const {
        className, items, value, defaultValue, onChange, readonly, label, direction = 'bottom right',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="8">
            {label && <span>{`${label}>`}</span>}
            <HListBox className={classNames(cls.ListBox, {}, [className, popupCls.popup])} as="div" value={value} onChange={onChange} disabled={readonly}>
                <HListBox.Button disabled={readonly} className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
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
                                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled })}>
                                    {selected && '*'}
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
