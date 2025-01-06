import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
    app: 'dilruba-website',
    plugins: [
        googleAnalytics({
            measurementId: 'G-9XB8FQMBVY'  // GA4 Google Measurement ID
        })
    ]
})

export default analytics
