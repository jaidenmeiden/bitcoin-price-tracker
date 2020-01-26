import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonSkeletonText } from '@ionic/react'

import './LoadingCard.css';

const LoadingCard = () => (
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>
                <IonSkeletonText animated className="loading-card__currency-name"></IonSkeletonText>
            </IonCardSubtitle>
            <IonCardTitle>
                <IonSkeletonText animated className="loading-card__currency-value"></IonSkeletonText>
            </IonCardTitle>
        </IonCardHeader>
    </IonCard>
);

export default LoadingCard;