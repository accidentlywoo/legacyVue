// @ResponseBody, @RequestBody 가 json을 Class로 변조/복조 해준다
@RequestMapping("/testPath")
public @ResponseBody List<VoClass> testPath(@RequestBody RequestVoClass req) {
	List<VoClass> list = new ArrayList<VoClass>();
	list = testService.getTestList(req);
	return list;
}

// @ResponseBody 가 json을 Map으로 파싱 해준다
@RequestMapping("/testPath")
public @ResponseBody Map<String, String> testPath(@RequestBody RequestVoClass req) {
	List<VoClass> list = new ArrayList<VoClass>();
	list = testService.getTestList(req);
	Map<String, String> map = new HashMap()<String, String>;
	for(VoClass dto : list) {
		map.put(dto.getKey(), dto.getValue());
	}
	return map;
}