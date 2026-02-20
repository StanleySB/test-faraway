export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    url: string;
}

export interface Vehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    url: string;
}

export interface Starship {
    name: string;
    model: string;
    hyperdrive_rating: string;
    starship_class: string;
    url: string;
}
