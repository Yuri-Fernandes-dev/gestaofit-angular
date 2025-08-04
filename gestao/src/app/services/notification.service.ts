import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();
  private nextId = 1;

  showSuccess(message: string, duration: number = 5000): void {
    this.showNotification(message, 'success', duration);
  }

  showError(message: string, duration: number = 7000): void {
    this.showNotification(message, 'error', duration);
  }

  showWarning(message: string, duration: number = 5000): void {
    this.showNotification(message, 'warning', duration);
  }

  showInfo(message: string, duration: number = 4000): void {
    this.showNotification(message, 'info', duration);
  }

  private showNotification(message: string, type: Notification['type'], duration: number): void {
    const notification: Notification = {
      id: this.nextId++,
      message,
      type,
      duration,
      timestamp: new Date()
    };

    const currentNotifications = this.notificationsSubject.value;
    this.notificationsSubject.next([...currentNotifications, notification]);

    // Auto-remove notification after duration
    if (duration > 0) {
      setTimeout(() => {
        this.removeNotification(notification.id);
      }, duration);
    }
  }

  removeNotification(id: number): void {
    const currentNotifications = this.notificationsSubject.value;
    const filteredNotifications = currentNotifications.filter(n => n.id !== id);
    this.notificationsSubject.next(filteredNotifications);
  }

  clearAll(): void {
    this.notificationsSubject.next([]);
  }
} 