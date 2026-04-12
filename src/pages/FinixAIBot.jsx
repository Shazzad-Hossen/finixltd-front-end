import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';
import FinixAIBotBridge from '../components/finix-ai-bot/FinixAIBotBridge';

const FinixAIBot = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="Technology bridge"
                title="Finix AI"
                gradientLastWord="Bot"
                description="Connection page between the FINIX LTD corporate site and the Finix AI Bot platform. Use the external link for live product access."
            />
            <FinixAIBotBridge />
        </PageShell>
    );
};

export default FinixAIBot;
