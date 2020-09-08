export default (snap) => {
	const data = [];
	snap.forEach((childSnap) => {
		data.push({
			...childSnap.val(),
			id: childSnap.key,
		});
	});
	return data;
};
