"use strict";
var Profile_1 = require('../models/Profile');
var Interest_1 = require('../models/Interest');
exports.getMe = function (req, res) {
    Profile_1.Profile
        .findById('5787f76545c37ca418802ac7')
        .exec()
        .then(function (data) {
        res.json(data);
    }, function (err) {
        res.status(500).json(err);
    });
};
exports.getCurrent = function (req, res) {
    Profile_1.Profile
        .find({ _id: { $ne: '5787f76545c37ca418802ac7' } })
        .exec()
        .then(function (data) {
        res.json(data);
    }, function (err) {
        res.status(500).json(err);
    });
};
exports.getOne = function (req, res) {
    Profile_1.Profile
        .findById(req.params.id)
        .populate('interests')
        .exec(function (err, profile) {
        if (err) {
            return res.status(500).json(err);
        }
        if (!profile) {
            return res.status(404).json({ message: 'Unable to locate profile with id ' + req.params.id });
        }
        res.json(profile);
    })
        .then(function (data) {
        res.json(data);
    }, function (err) {
        res.status(500).json(err);
    });
};
exports.postNewProfile = function (req, res) {
    var _a = req.body, name = _a.name, age = _a.age, image = _a.image, interests = _a.interests, favoriteFood = _a.favoriteFood;
    image = image || '/common-assets/generic-avatar.png';
    var interestPromiseList = interests.map(function (interest) {
        var newInterest = new Interest_1.Interest(interests[0]);
        return newInterest.save();
    });
    Promise.all(interestPromiseList)
        .then(function (interests) {
        var interestList = interests.map(function (interest) { return interest._doc._id; });
        var newProfile = new Profile_1.Profile({ name: name, age: age, interests: interestList, image: image, favoriteFood: favoriteFood });
        newProfile.save(function (err, profile) {
            if (err) {
                return res.status(500).json(err);
            }
            if (!profile) {
                return res.status(404).json({ message: 'Unable to post new profile' });
            }
            res.json(profile);
        });
    })
        .catch(function (err) {
        res.status(500).json(err);
    });
};
exports.postNewInterest = function (req, res) {
    var newInterest = new Interest_1.Interest(req.body);
    var newInterestId;
    newInterest.save()
        .then(function (interest) {
        if (!interest) {
            res.status(404).send("Something went wrong while trying to save the interest with the name " + req.body.name);
            return;
        }
        res.json(interest);
    }, function (err) {
        res.status(500).json(err);
    });
    // let profileArr = profiles.filter((value) => {
    // 	if (value.id == req.params.id) {
    // 		return true;
    // 	}
    // 	return false;
    // });
    // if (!profileArr[0]) {
    // 	let error = new Error('Could not find profile');
    // 	return res.status(404).send(error);
    // }
    // let interest: string;
    // if (req.body.interest) {
    // 	interest = req.body.interest;
    // } else if (req.text) {
    // 	interest = req.text;
    // }
    // console.log('new interest for profile %s', req.params.id, interest);
    // if (req.query.index) {
    // 	profileArr[0].interests[req.query.index] = interest;
    // } else {
    // 	profileArr[0].interests.push(interest);
    // }
    // res.json(interest);
};
exports.deleteInterest = function (req, res) {
    // Profile
    // 	.remove({id: req.params.id})
    // 	.exec()
    // 	.then((data) => {
    // 		res.json(data);
    // 	}, (err) => {
    // 		res.status(500).json(err);
    // 	});
    // let profileArr = profiles.filter((value) => {
    // 	if (value.id == req.params.id) {
    // 		return true;
    // 	}
    // 	return false;
    // });
    // if (!profileArr[0]) {
    // 	let error = new Error('Could not find profile');
    // 	return res.status(404).send(error);
    // }
    // console.log('deleting interest from profile %s', req.params.id, req.query.q);
    // let profileIndex = profiles.indexOf(profileArr[0]);
    // if (profileIndex !== -1) {
    // 	let interestIndex = profiles[profileIndex].interests.indexOf(req.query.q);
    // 	profiles[profileIndex].interests.splice(interestIndex, 1);
    // }
    // res.json([req.query.interest]);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL1Byb2ZpbGVzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsd0JBQXdCLG1CQUFtQixDQUFDLENBQUE7QUFDNUMseUJBQXlCLG9CQUFvQixDQUFDLENBQUE7QUFvQmpDLGFBQUssR0FBRyxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7SUFDaEUsaUJBQU87U0FDTCxRQUFRLENBQUMsMEJBQTBCLENBQUM7U0FDcEMsSUFBSSxFQUFFO1NBQ04sSUFBSSxDQUFDLFVBQUMsSUFBSTtRQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQyxFQUFFLFVBQUMsR0FBRztRQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ1csa0JBQVUsR0FBRyxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7SUFDckUsaUJBQU87U0FDTCxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsRUFBQyxHQUFHLEVBQUUsMEJBQTBCLEVBQUMsRUFBQyxDQUFDO1NBQzlDLElBQUksRUFBRTtTQUNOLElBQUksQ0FBQyxVQUFDLElBQUk7UUFDVixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUMsRUFBRSxVQUFDLEdBQUc7UUFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNXLGNBQU0sR0FBRyxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7SUFDakUsaUJBQU87U0FDTCxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDdkIsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUNyQixJQUFJLENBQUMsVUFBQyxHQUFH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QUFLO0lBRUwsaUJBQWlCO0lBQ2pCLE1BQU07SUFFTix3QkFBd0I7SUFDeEIsb0RBQW9EO0lBQ3BELHVDQUF1QztJQUN2QyxJQUFJO0lBRUosZ0ZBQWdGO0lBQ2hGLHNEQUFzRDtJQUN0RCw2QkFBNkI7SUFDN0IsOEVBQThFO0lBRTlFLDhEQUE4RDtJQUM5RCxJQUFJO0lBRUosa0NBQWtDO0FBQ25DLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9Qcm9maWxlc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL21vZGVscy9Qcm9maWxlJztcclxuaW1wb3J0IHsgSW50ZXJlc3QgfSBmcm9tICcuLi9tb2RlbHMvSW50ZXJlc3QnO1xyXG5cclxuaW50ZXJmYWNlIElQcm9maWxlIHtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0YWdlOiBudW1iZXI7XHJcblx0aW1hZ2U6IHN0cmluZztcclxuXHRpbnRlcmVzdHM6IElJbnRlcmVzdFtdO1xyXG5cdGZhdm9yaXRlRm9vZDogc3RyaW5nO1xyXG5cdF9pZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUludGVyZXN0IHtcclxuXHRfZG9jOiB7XHJcblx0XHRfaWQ6IHtpZDogc3RyaW5nfTtcclxuXHR9O1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRfaWQ6IHN0cmluZztcclxuXHRpZDogc3RyaW5nfG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1lID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuXHRQcm9maWxlXHJcblx0XHQuZmluZEJ5SWQoJzU3ODdmNzY1NDVjMzdjYTQxODgwMmFjNycpXHJcblx0XHQuZXhlYygpXHJcblx0XHQudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRyZXMuanNvbihkYXRhKTtcclxuXHRcdH0sIChlcnIpID0+IHtcclxuXHRcdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuXHRcdH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudCA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcblx0UHJvZmlsZVxyXG5cdFx0LmZpbmQoe19pZDogeyRuZTogJzU3ODdmNzY1NDVjMzdjYTQxODgwMmFjNyd9fSlcclxuXHRcdC5leGVjKClcclxuXHRcdC50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdHJlcy5qc29uKGRhdGEpO1xyXG5cdFx0fSwgKGVycikgPT4ge1xyXG5cdFx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG5cdFx0fSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRPbmUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xyXG5cdFByb2ZpbGVcclxuXHRcdC5maW5kQnlJZChyZXEucGFyYW1zLmlkKVxyXG5cdFx0LnBvcHVsYXRlKCdpbnRlcmVzdHMnKVxyXG5cdFx0LmV4ZWMoKGVyciwgcHJvZmlsZSkgPT4ge1xyXG5cdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmICghcHJvZmlsZSkge1xyXG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogJ1VuYWJsZSB0byBsb2NhdGUgcHJvZmlsZSB3aXRoIGlkICcgKyByZXEucGFyYW1zLmlkfSlcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0cmVzLmpzb24ocHJvZmlsZSk7XHJcblx0XHR9KVxyXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0cmVzLmpzb24oZGF0YSk7XHJcblx0XHR9LCAoZXJyKSA9PiB7XHJcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcblx0XHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0TmV3UHJvZmlsZSA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcblx0bGV0IHsgbmFtZSwgYWdlLCBpbWFnZSwgaW50ZXJlc3RzLCBmYXZvcml0ZUZvb2QgfSA9IDxJUHJvZmlsZT5yZXEuYm9keTtcclxuXHRcclxuXHRpbWFnZSA9IGltYWdlIHx8ICcvY29tbW9uLWFzc2V0cy9nZW5lcmljLWF2YXRhci5wbmcnO1xyXG5cdFxyXG5cdGxldCBpbnRlcmVzdFByb21pc2VMaXN0ID0gaW50ZXJlc3RzLm1hcCgoaW50ZXJlc3QpID0+IHtcclxuXHRcdGxldCBuZXdJbnRlcmVzdCA9IG5ldyBJbnRlcmVzdChpbnRlcmVzdHNbMF0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gbmV3SW50ZXJlc3Quc2F2ZTxJSW50ZXJlc3Q+KCk7XHJcblx0fSk7XHJcblx0XHJcblx0UHJvbWlzZS5hbGw8SUludGVyZXN0PihpbnRlcmVzdFByb21pc2VMaXN0KVxyXG5cdFx0LnRoZW4oKGludGVyZXN0cykgPT4ge1xyXG5cdFx0XHRsZXQgaW50ZXJlc3RMaXN0ID0gaW50ZXJlc3RzLm1hcCgoaW50ZXJlc3QpID0+IGludGVyZXN0Ll9kb2MuX2lkKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBuZXdQcm9maWxlID0gbmV3IFByb2ZpbGUoe25hbWUsIGFnZSwgaW50ZXJlc3RzOiBpbnRlcmVzdExpc3QsIGltYWdlLCBmYXZvcml0ZUZvb2R9KTtcclxuXHRcdFx0XHJcblx0XHRcdG5ld1Byb2ZpbGUuc2F2ZSgoZXJyLCBwcm9maWxlKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICghcHJvZmlsZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZXNzYWdlOiAnVW5hYmxlIHRvIHBvc3QgbmV3IHByb2ZpbGUnfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHJlcy5qc29uKHByb2ZpbGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG5cdFx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdE5ld0ludGVyZXN0ID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuXHRsZXQgbmV3SW50ZXJlc3QgPSBuZXcgSW50ZXJlc3QocmVxLmJvZHkpO1xyXG5cdGxldCBuZXdJbnRlcmVzdElkOiBzdHJpbmc7XHJcblx0XHJcblx0bmV3SW50ZXJlc3Quc2F2ZSgpXHJcblx0XHQudGhlbigoaW50ZXJlc3QpID0+IHtcclxuXHRcdFx0aWYgKCFpbnRlcmVzdCkge1xyXG5cdFx0XHRcdHJlcy5zdGF0dXMoNDA0KS5zZW5kKGBTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSB0cnlpbmcgdG8gc2F2ZSB0aGUgaW50ZXJlc3Qgd2l0aCB0aGUgbmFtZSAke3JlcS5ib2R5Lm5hbWV9YCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRyZXMuanNvbihpbnRlcmVzdCk7XHJcblx0XHR9LCAoZXJyKSA9PiB7XHJcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcblx0XHR9KTtcclxuXHRcclxuXHQvLyBsZXQgcHJvZmlsZUFyciA9IHByb2ZpbGVzLmZpbHRlcigodmFsdWUpID0+IHtcclxuXHQvLyBcdGlmICh2YWx1ZS5pZCA9PSByZXEucGFyYW1zLmlkKSB7XHJcblx0Ly8gXHRcdHJldHVybiB0cnVlO1xyXG5cdC8vIFx0fVxyXG5cdFx0XHJcblx0Ly8gXHRyZXR1cm4gZmFsc2U7XHJcblx0Ly8gfSk7XHJcblx0XHJcblx0XHJcblx0Ly8gaWYgKCFwcm9maWxlQXJyWzBdKSB7XHJcblx0Ly8gXHRsZXQgZXJyb3IgPSBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHByb2ZpbGUnKTtcclxuXHQvLyBcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZChlcnJvcik7XHJcblx0Ly8gfVxyXG5cdFxyXG5cdC8vIGxldCBpbnRlcmVzdDogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIGlmIChyZXEuYm9keS5pbnRlcmVzdCkge1xyXG5cdC8vIFx0aW50ZXJlc3QgPSByZXEuYm9keS5pbnRlcmVzdDtcclxuXHQvLyB9IGVsc2UgaWYgKHJlcS50ZXh0KSB7XHJcblx0Ly8gXHRpbnRlcmVzdCA9IHJlcS50ZXh0O1xyXG5cdC8vIH1cclxuXHRcclxuXHQvLyBjb25zb2xlLmxvZygnbmV3IGludGVyZXN0IGZvciBwcm9maWxlICVzJywgcmVxLnBhcmFtcy5pZCwgaW50ZXJlc3QpO1xyXG5cdFxyXG5cdC8vIGlmIChyZXEucXVlcnkuaW5kZXgpIHtcclxuXHQvLyBcdHByb2ZpbGVBcnJbMF0uaW50ZXJlc3RzW3JlcS5xdWVyeS5pbmRleF0gPSBpbnRlcmVzdDtcclxuXHQvLyB9IGVsc2Uge1xyXG5cdC8vIFx0cHJvZmlsZUFyclswXS5pbnRlcmVzdHMucHVzaChpbnRlcmVzdCk7XHJcblx0Ly8gfVxyXG5cdFxyXG5cdC8vIHJlcy5qc29uKGludGVyZXN0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVJbnRlcmVzdCA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcblx0Ly8gUHJvZmlsZVxyXG5cdC8vIFx0LnJlbW92ZSh7aWQ6IHJlcS5wYXJhbXMuaWR9KVxyXG5cdC8vIFx0LmV4ZWMoKVxyXG5cdC8vIFx0LnRoZW4oKGRhdGEpID0+IHtcclxuXHQvLyBcdFx0cmVzLmpzb24oZGF0YSk7XHJcblx0Ly8gXHR9LCAoZXJyKSA9PiB7XHJcblx0Ly8gXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcblx0Ly8gXHR9KTtcclxuXHRcdFxyXG5cdC8vIGxldCBwcm9maWxlQXJyID0gcHJvZmlsZXMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xyXG5cdC8vIFx0aWYgKHZhbHVlLmlkID09IHJlcS5wYXJhbXMuaWQpIHtcclxuXHQvLyBcdFx0cmV0dXJuIHRydWU7XHJcblx0Ly8gXHR9XHJcblx0XHRcclxuXHQvLyBcdHJldHVybiBmYWxzZTtcclxuXHQvLyB9KTtcclxuXHRcclxuXHQvLyBpZiAoIXByb2ZpbGVBcnJbMF0pIHtcclxuXHQvLyBcdGxldCBlcnJvciA9IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgcHJvZmlsZScpO1xyXG5cdC8vIFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGVycm9yKTtcclxuXHQvLyB9XHJcblx0XHJcblx0Ly8gY29uc29sZS5sb2coJ2RlbGV0aW5nIGludGVyZXN0IGZyb20gcHJvZmlsZSAlcycsIHJlcS5wYXJhbXMuaWQsIHJlcS5xdWVyeS5xKTtcclxuXHQvLyBsZXQgcHJvZmlsZUluZGV4ID0gcHJvZmlsZXMuaW5kZXhPZihwcm9maWxlQXJyWzBdKTtcclxuXHQvLyBpZiAocHJvZmlsZUluZGV4ICE9PSAtMSkge1xyXG5cdC8vIFx0bGV0IGludGVyZXN0SW5kZXggPSBwcm9maWxlc1twcm9maWxlSW5kZXhdLmludGVyZXN0cy5pbmRleE9mKHJlcS5xdWVyeS5xKTtcclxuXHRcdFxyXG5cdC8vIFx0cHJvZmlsZXNbcHJvZmlsZUluZGV4XS5pbnRlcmVzdHMuc3BsaWNlKGludGVyZXN0SW5kZXgsIDEpO1xyXG5cdC8vIH1cclxuXHRcclxuXHQvLyByZXMuanNvbihbcmVxLnF1ZXJ5LmludGVyZXN0XSk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
