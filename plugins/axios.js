export default function({ $axios }, inject) {
  $axios.setBaseURL(`${process.env.BASE_URL}/api/v1`);
}
