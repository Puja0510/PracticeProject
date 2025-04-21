const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

let localStream;
let remoteStream;
let peerConnection;

// Replace with your signaling server
const socket = new WebSocket('ws://localhost:3000');

const config = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' }
  ]
};
async function startCall() {

  peerConnection = new RTCPeerConnection(config);

  // 1. Get user media
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  localVideo.srcObject = localStream;

  // 2. Create peer connections
  peer1 = new RTCPeerConnection();
  peer2 = new RTCPeerConnection();

  // 3. ICE candidates
  peer1.onicecandidate = e => e.candidate && peer2.addIceCandidate(e.candidate);
  peer2.onicecandidate = e => e.candidate && peer1.addIceCandidate(e.candidate);

  // 4. Stream tracks to peer1
  localStream.getTracks().forEach(track => peer1.addTrack(track, localStream));

  // 5. When peer2 gets remote track
  peer2.ontrack = e => remoteVideo.srcObject = e.streams[0];

  // 6. Offer/Answer exchange
  const offer = await peer1.createOffer();
  await peer1.setLocalDescription(offer);
  await peer2.setRemoteDescription(offer);

  const answer = await peer2.createAnswer();
  await peer2.setLocalDescription(answer);
  await peer1.setRemoteDescription(answer);
  
}

function endCall() {
    // Stop all tracks
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
      localStream = null;
    }
  
    // Close peer connection
    if (peerConnection) {
      peerConnection.close();
      peerConnection = null;
    }
  
    // Reset video elements
    if (localVideo) localVideo.srcObject = null;
    if (remoteVideo) remoteVideo.srcObject = null;
  
    alert("Call Ended");
  }
  
  
