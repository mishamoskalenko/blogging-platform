import { ReactElement } from 'react';
import { getFeatureFlag } from '../../lib/setGetFeatures';
import type { FeatureFlags } from '../../../../types/featureFlags';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;
    if (getFeatureFlag(feature)) {
        return on;
    }
    return off;
};
