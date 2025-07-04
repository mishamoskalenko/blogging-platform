import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingProps) => {
    const {
        className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0,
    } = props;
    const { t } = useTranslation('article-details');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStartCount: number) => {
        setStarsCount(selectedStartCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStartCount);
        }
        setIsModalOpen(true);
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input placeholder={t('Your feedback')} value={feedback} onChange={setFeedback} data-testid="RatingCard.Input" />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])} padding="16" max data-testid="RatingCard" border="round">
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Thank you for your review!') : title} />
                <StarRating size={40} onSelect={onSelectStars} selectedStars={rate} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32" max>
                        {modalContent}
                        <HStack gap="16" justify="end" max>
                            <Button data-testid="RatingCard.Close" onClick={cancelHandle} theme="outline">{t('Close')}</Button>
                            <Button data-testid="RatingCard.Send" onClick={acceptHandle}>{t('Send')}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <Button fullWidth onClick={acceptHandle} size="l">
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
