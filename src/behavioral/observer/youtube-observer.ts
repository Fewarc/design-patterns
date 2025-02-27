interface Publisher {
  subscribers: Subscriber[];
  subscribe(s: Subscriber): void;
  unsubscribe(s: Subscriber): void;
  notifySubscribers(m: string): void;
}

interface Subscriber {
  notify(message: string): void;
}

class YoutubeUser implements Subscriber {
  notify(message: string): void {
    console.log("user notified: " + message);
  }
}

class YoutubeChannel implements Publisher {
  subscribers: Subscriber[] = [];
  subscribe(s: Subscriber): void {
    this.subscribers.push(s);
  }

  unsubscribe(s: Subscriber): void {
    const index = this.subscribers.indexOf(s);
    this.subscribers.splice(index, 1);
  }

  notifySubscribers(message: string): void {
    this.subscribers.forEach((s) => s.notify(message));
  }
}

(function testObserver() {
  const ytChannel = new YoutubeChannel();
  const user1 = new YoutubeUser();
  const user2 = new YoutubeUser();
  const user3 = new YoutubeUser();

  ytChannel.subscribe(user1);
  ytChannel.subscribe(user2);
  ytChannel.subscribe(user3);

  ytChannel.notifySubscribers("notification1");

  ytChannel.unsubscribe(user3);

  ytChannel.notifySubscribers("notification2");
})();
