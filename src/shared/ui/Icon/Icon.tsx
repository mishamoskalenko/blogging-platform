import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable?: true;
    onClick: () => void;
    ['data-testid']?: string;
}

type IconProps = NonClickableIconProps | ClickableIconProps

export const Icon = memo((props: IconProps) => {
    const {
        className, Svg, clickable, width, height, ...otherProps
    } = props;

    const icon = (
        <Svg className={classNames(cls.Icon, {}, [className])} width={width} height={height} {...otherProps} />
    );

    if (clickable) {
        return (
            <button className={cls.button} onClick={props.onClick} type="button" style={{ height, width }} data-testid={props['data-testid']}>
                {icon}
            </button>
        );
    }

    return icon;
});
