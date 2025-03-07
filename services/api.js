import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://bhakgqbundgpkrylutkq.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoYWtncWJ1bmRncGtyeWx1dGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMTE5NTYsImV4cCI6MjA1Njg4Nzk1Nn0.0IqOqFrVd16Z_9cW3oQIl2hCmF4IbjceJY4KbXsLbBY",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoYWtncWJ1bmRncGtyeWx1dGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMTE5NTYsImV4cCI6MjA1Njg4Nzk1Nn0.0IqOqFrVd16Z_9cW3oQIl2hCmF4IbjceJY4KbXsLbBY"
    }
})