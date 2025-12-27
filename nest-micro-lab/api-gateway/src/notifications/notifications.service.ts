import { Inject, Injectable } from '@nestjs/common';
import {
  NOTIFICATION_OPTIONS,
  NOTIFICATION_FEATURE_REGISTRY,
} from './notifications.constants';
import type {
  NotificationModuleOptions,
  NotificationFeatureOptions,
  NotificationChannel,
} from './notifications.interface';

@Injectable()
export class NotificationsService {
  constructor(
    @Inject(NOTIFICATION_OPTIONS)
    private readonly options: NotificationModuleOptions,

    @Inject(NOTIFICATION_FEATURE_REGISTRY)
    private readonly features: NotificationFeatureOptions[],
  ) {}

  // Get feature config by name
  private getFeature(
    featureName: string,
  ): NotificationFeatureOptions | undefined {
    return this.features.find((f) => f.featureName === featureName);
  }

  // Resolve channels (feature override -> global default)
  private resolveChannels(
    feature?: NotificationFeatureOptions,
  ): NotificationChannel[] {
    if (!this.options.enable) return [];
    if (feature?.enable === false) return [];
    if (feature?.channels?.length) return feature.channels;
    return [this.options.defaultChannel];
  }

  notify(featureName: string, event: string, payload: any) {
    if (!this.options.enable || !this.getFeature(featureName)?.enable) {
      return { skipped: true, reason: 'notifications disabled' };
    }

    const feature = this.getFeature(featureName);
    const channels = this.resolveChannels(feature);

    const prefix = feature?.prefix ?? `[${featureName.toUpperCase()}]`;
    const message = `${prefix} (${this.options.appName}) ${event}`;

    // For lab: only log, pretend “channels”
    for (const ch of channels) {
      console.log(`[${ch.toUpperCase()}] ${message}`, payload);
    }

    return { ok: true, channels, featureName, event };
  }
}
